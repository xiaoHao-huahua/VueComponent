<template>
  <div class="row">
    <h2 v-if="isSearch">请输入搜索关键字</h2>
    <h2 v-else-if="isLoading">正在搜索中,请稍等...</h2>
    <div class="card" v-else-if="!(isSearch && isLoading)" v-for="(user,index) in users" :key = user.id>
      <a :href='user.html_url' target="_blank">
        <img :src='user.avatar_url' style="width: 100px" />
      </a>
      <p class="card-text">{{user.userName}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
export default {
  data() {
    return {
      isSearch: true,
      isLoading: false,
      users: [],
      errorMsg: ""
    };
  },
  mounted() {
    this.$eventBus.$on("search", searchName => {
      if (searchName) {
        this.isSearch = false;
        this.isLoading = true;
      const result = axios
          .get("https://api.github.com/search/users", {
            params: { q: searchName }
          })
          result.then((value)=>{
            const users = value.data.items.map((item)=>({
              userName:item.login,
              avatar_url:item.avatar_url,
              html_url:item.html_url
            }))
            this.isLoading = false
            this.users = users
          })
      }
    });
  }
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
