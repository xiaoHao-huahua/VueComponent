export default {
   //请求中
  requesting(state){
    state.isLoading= true;
    state.isSearch = false
  },
  //请求成功
  req_success(state,{users}){
    state.isLoading= false;
    state.users = users 
  },
  //请求失败
  req_error(state,{errorMsg}){
    state.loading = false
    state.errorMsg = errorMsg
  }
}