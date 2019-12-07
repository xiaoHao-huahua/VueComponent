<template>
<ul>
  {{msg}}
<Blog v-for="(blog) in blogs" :key="blog.id" :blog='blog'/>
</ul>
</template>

<script type="text/ecmascript-6">
import Blog from './Blog'
  export default {
    data(){
      return{
        blogs:[
          {id:1,title:'Blog111'},
          {id:2,title:'Blog222'},
          {id:3,title:'Blog333'},
          {id:4,title:'Blog444'}
        ],
        msg:'dsdsd'
      }
    },
    components:{
      Blog
    }
  }
</script>

<style scoped>
ukl>Blog{
  background-color: aqua
}
</style>
