// import logo from "./assets/imgs/logo.png";
// import "./assets/css/my.css";

// const image = new Image();
// image.src = logo;
// document.body.appendChild(image);
// document.getElementById("root").innerHTML = "<h1>Hello222</h1>";


import Vue from 'vue'
import App from './App.vue'
import './static/css/index.css'

new Vue({
  components:{
    App
  },
  template:'<App/>'
}).$mount('#root')