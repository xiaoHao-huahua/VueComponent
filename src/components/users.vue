<template>
  <div class="row">
    <h2 v-if="isSearch">请输入搜索关键字</h2>
    <h2 v-else-if="isLoading">正在搜索中,请稍等...</h2>
    <div
      class="card"
      v-else-if="!(isSearch && isLoading)"
      v-for="(user,index) in users"
      :key="user.id"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.userName}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState} from 'vuex';
export default {
  computed: {
    ...mapState(['isSearch','isLoading','users','errorMsg'])
  },
};
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
