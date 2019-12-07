<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs/>
  </div>
</template>


<script type="text/ecmascript-6">
import Blogs from './components/Blogs'
  export default {
    data(){
      return {
        title:'hello'
      }
    },
    components:{
      Blogs
    }  
  }
</script>

<style scoped>

h2{
  color:pink
}
</style>
