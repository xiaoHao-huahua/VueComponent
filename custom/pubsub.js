(function(window) {
  const PubSub = {};

  let eventObj = {};
  let id = Date.now();
  // 1. token subscribe(msgName, callback): 订阅消息, 并返回一个标识token
  PubSub.subscribe = function(msg, callback) {
    let callbacks = eventObj[msg];
    if (!callbacks) {
      callbacks = {};
      eventObj[msg] = callbacks;
    }
    const token = `uid_${msg}${id}`;
    callbacks[token] = callback;
    return token;
  };

  PubSub.publish = function(msg, data) {

    let callbacks = eventObj[msg];
    if (callbacks) {
      // console.log(eventObj,eventObj[msg]);
      // console.log(eventObj[msg][token]);
      // console.log(Object.values(callbacks));
      // eventObj[msg][token](msg,data)
      Object.values(callbacks).forEach(callback => {
        setTimeout(() => {
          callback(msg, data);
        });
      });
    }
  };
  PubSub.publishSync = function(msg, data) {
    let callbacks = eventObj[msg];
    if (callbacks) {
      Object.values(callbacks).forEach(callback => {
        callback(msg, data);
      });
    }
  };

  PubSub.unsubscribe = function(msg){
    if(msg === undefined){
      eventObj = {}
    }else if(typeof msg === 'string' && msg.indexOf('uid_') === 0){
      Object.values(eventObj).forEach((obj)=>{
        delete obj[msg]  
      })
    }else{
      delete eventObj[msg]
    }
  }

  window.PubSub = PubSub;
})(window);
