
import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  beforeCreate(){
      Vue.prototype.$eventBus = this
  },
  components:{
    App
  },
  template:'<App/>',
  store
}).$mount('#root')