<template>
  <div>
    <p>当前为{{count}} ，是{{evenOrOdd}}</p>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseIfOdd">+</button>
    <button @click="increaseAsync">+</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      count: 0
    };
  },
  computed: {
    evenOrOdd() {
      return this.count % 2 === 1 ? "奇数" : "偶数";
    }
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
    increaseIfOdd() {
      if (this.count % 2 === 1) {
        this.count++;
      }
    },
    increaseAsync() {
      setTimeout(() => {
        this.count++;
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
