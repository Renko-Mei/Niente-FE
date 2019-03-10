export const state = () => ({
  token: null
})

export const mutations = {
  setJwtToken(state, token) {
    state.token = token
  }
}

export const actions = {
  // async nuxtServerInit(veuxContext, context) {
  //   try {
  //     let limit = 50; // auto calculate this value based on screensize?
  //     let data = await context.app.$axios.$get("/articlepreviews/?limit=" + String(limit));
  //     veuxContext.commit('setArticlePreviews', data);
  //   }
  //   catch (e) {
  //     throw e;
  //   }
  // },
  async login(context, user) {
    try {
      const data = await this.$axios.$post('/login/', user)
      context.commit('setJwtToken', data)
    } catch (e) {
      throw e
    };
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.token != null
  },
  jwtToken(state) {
    return state.token != null ? state.token : ''
  }
}
