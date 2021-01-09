import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defUrl: 'https://hsb11.cn/#/',
    url: 'https://hsb11.cn/#/'
  },
  mutations: {
    setUrl(state, name) {
      state.url = state.defUrl + name
      console.log(state.url)
    }
  },
  actions: {
  },
  modules: {
  }
})
