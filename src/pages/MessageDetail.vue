<template>
  <ul>
    <li>ID:{{id}}</li>
    <li>Title:{{detail.title}}</li>
    <li>Content:{{detail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
const messageDetails = [
  { id: 1, title: "message01", content: "message content01" },
  { id: 3, title: "message03", content: "message content03" },
  { id: 5, title: "message05", content: "message content05" }
];
export default {
  props:['id','name'],
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    setTimeout(() => {
      // const id = this.$route.params.id * 1;
      const id = this.id * 1;
      const detail = messageDetails.find(detail =>detail.id === id);
      this.detail = detail;
    }, 1000);
  },
  watch:{
    "$route"(to,from){
      setTimeout(()=>{
        // const id = to.params.id * 1;
        const id = this.id * 1;
      const detail = messageDetails.find(detail =>detail.id === id);
      this.detail = detail;
      },1000)
    }
  }
};
</script>



<style scoped>
</style>
