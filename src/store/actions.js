import axios from "axios";
export default {
  async search ({commit}, searchName) {
    // 在发请求前, 提交请求中的mutation
    commit('requesting')

    // 发异步ajax请求获取数据
    try {
      const response = await axios('https://api.github.com/search/users', {params: {q: searchName}})
      // 如果成功了, 提交请求成功的mutation
      const result = response.data
      const users = result.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url 
      }))
      // commit(REQ_SUCCESS, users) // 传递数据本身
      commit('req_success', {users}) // 传递包含数据的对象
    } catch (error) { // 如果失败了, 提交请求失败的mutation
      // commit(REQ_ERROR, error.message)
      commit('req_error', {errorMsg: error.message})
    }
  }
};
