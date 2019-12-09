<template>
  <div>
    <p>当前为{{$store.state.count}} ，是{{$store.getters.evenOrOdd}}</p>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseIfOdd">奇数+</button>
    <button @click="increaseAsync">延迟+</button>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  mounted(){
    console.log(this.$store);
  },
  methods: {
    increase() {
      this.$store.commit('increase')
    },
    decrease() {
      this.$store.commit('decrease')
    },
    increaseIfOdd() {
      this.$store.dispatch('increaseIfOdd')
    },
    increaseAsync() {  
      this.$store.dispatch('increaseAsync')
    }
  }
};
</script>

<style scoped>
</style>
