import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0
};

const actions = {
  increaseIfOdd({commit,state}){
    if(state.count % 2 === 1){
      commit('increase')
    }
  },
  increaseAsync({commit}){
    setTimeout(() => {
      commit('increase')
    }, 1000);
  }
};
const mutations = {
  increase(state) {
    state.count++;
  },
  decrease(state) {
    state.count--;
  }
};
const getters = {
  evenOrOdd(state){
    return state.count%2 === 1 ? '奇数' : '偶数'
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
