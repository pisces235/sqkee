import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      showHomeTry: false,
      showHomeSuccess: false,
      showHomeWait: false,
      success: true,
      waitlistCount: 100
    }
  },
  getters: {
  },
  mutations: {
    changeShowHomeTry(state) {
      state.showHomeTry = !state.showHomeTry
    },
    changeShowHomeSuccess(state) {
      state.showHomeSuccess = !state.showHomeSuccess
    },
    changeShowHomeWait(state) {
      state.showHomeWait = !state.showHomeWait
    }
  },
  actions: {
  },
  modules: {
  }
})
