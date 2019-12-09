/* 
自定义全局事件总线对象模块
*/

// (function(window) {
//   let eventBus = {};
//   /*
// {
//   add:[f1,f2,f3],
//   delete:[f1]

//   eventName:[]
// }
// 'add',

// (data) => {
//       console.log('add1()', data)
//     }
//  */
//   eventBus.on = function(eventName, listener) {
//     let callbacks = eventBus[eventName];
//     if (!callbacks) {
//       callbacks = [];
//       eventBus[eventName] = callbacks;
//     }
//     eventBus[eventName].push(listener);
//   };

//   eventBus.emit = function(eventName, data) {
//     if(eventBus[eventName]){
//     eventBus[eventName].forEach(callback=>{
//       callback(data)
//     })
//     }
//   };

//   eventBus.off = function(eventName) {
//     if(eventName === undefined){
//       eventBus = {}
//     }else{
//       delete eventBus[eventName]
//     }
//   }

//   window.eventBus = eventBus;
// })(window);

(function(window) {
  let eventBus = {};
  /*
// {
//   add:[f1,f2,f3],
//   delete:[f1]

//   eventName:[]
// }
//  */

  eventBus.on = function(eventName, listener) {
    let callbacks = eventBus[eventName];
    if (!callbacks) {
      eventBus[eventName] = [];
    }
    eventBus[eventName].push(listener);
  };

  eventBus.emit = function(eventName, data) {
    if (eventBus[eventName]) {
      eventBus[eventName].forEach((callback)=>{
        callback(data)
      })
    }
  };
  eventBus.off = function(eventName) {
    if (eventName === undefined) {
      eventBus[eventName] = {};
    } else {
      delete eventBus[eventName];
    }
  };

  window.eventBus = eventBus;
})(window);




