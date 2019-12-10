<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="{name:'detail',params:{id:m.id}}">{{m.title}}</router-link>
        <button @click='pushShow(m.id)'>push</button>
        <button @click='replaceShow(m.id)'>replace</button>
      </li>
      <button @click='$router.back()'>返回</button>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    setTimeout(()=>{
      const messages = [
        { id: 1, title: "message01" },
        { id: 3, title: "message03" },
        { id: 5, title: "message05" }
      ]
      this.messages = messages
    },1000)
    
  },
  methods:{
    pushShow(id){
      this.$router.push({name:'detail',params:{id}})
    },
    replaceShow(id){
      this.$router.replace({name:'detail',params:{id}})
    }
  }
};
</script>

<style scoped>
</style>
