<template>
  <li>
    {{blog.title}}
  </li>
</template>

<script type="text/ecmascript-6">
export default {
props:['blog']
};
</script>

<style scoped>
li{
  color: aqua
}
</style>
