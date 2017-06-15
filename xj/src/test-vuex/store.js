import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  title:'vuex'
}

const mutations = {
  CHANGE_TITLE(state){
    state.title = '小金改变了标题'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
