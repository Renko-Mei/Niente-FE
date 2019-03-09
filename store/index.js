import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null
    },
    mutations: {
      setJwtToken(state, token) {
        state.token = token
      }
    },
    actions: {
      async nuxtServerInit(veuxContext, context) {
        // try {
        //   let limit = 50; // auto calculate this value based on screensize?
        //   let data = await context.app.$axios.$get("/articlepreviews/?limit=" + String(limit));
        //   veuxContext.commit('setArticlePreviews', data);
        // }
        // catch (e) {
        //   throw e;
        // }
      },
      async login(context, user) {
        try {
          let data = await this.$axios.$post('/login/', user);
          context.commit('setJwtToken', data);
        }
        catch (e) {
          throw e;
        };
      }
    },
    getters: {
      isAuthenticated(state) {
        return state.token != null;
      },
      jwtToken(state) {
        return state.token != null ? state.token : "";
      }
    }
  });
}

export default createStore;