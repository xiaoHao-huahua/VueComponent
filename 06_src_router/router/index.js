import Vue from "vue";
import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detail from '../pages/MessageDetail.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News
        },
        {
          path: "message",
          component: Message,
          children:[
            {
              name:'detail',
              path:'/home/message/detail/:id',
              component:Detail,
              props:true 
              // props:(route)=>(id:route.params.id,name:route.query.name)
            }
          ]
        },
        {
          path: "/home",
      redirect: "/home/news"
        }
      ]
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
