import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'

new Vue({
  components:{
    App
  },
  template:'<App/>',
  store,

}).$mount('#root')