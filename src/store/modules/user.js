const state = {
  userInfo: {},
  mutations: {
    SET_USERINFO: (state, info) => {
      state.userInfo = info
    }
  },
  actions: {
    setUserInfo (context) {
      context.commit('SET_USERINFO')
    }
  }
}

export default {
  namespaced: true,
  state
}
