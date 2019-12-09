
import Vue from 'vue'
import App from './App.vue'

new Vue({
  beforeCreate(){
      Vue.prototype.$eventBus = this
  },
  components:{
    App
  },
  template:'<App/>'
}).$mount('#root')