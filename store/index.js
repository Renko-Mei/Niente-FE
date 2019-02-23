import Vuex from 'vuex';
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArticles: []
    },
    mutations: {
      // post: payload
      setArticles(state, articles) {
        state.loadedArticles = articles;
      }
    },
    actions: {
      setArticles(veuxContext, articles) {
        veuxContext.commit('setArticles', articles);
      },
      async nuxtServerInit(veuxContext, context) {
        try {
          console.log("Getting response from the server");
          let res = await axios.get("https://niente-177123.appspot.com/api/articles/");
          veuxContext.commit('setArticles', res.data);
        }
        catch (e) {
          console.log(e);
          context.error(e);
        }
      }
    },
    getters: {
      loadedArticles(state) {
        return state.loadedArticles;
      }
    }
  });
}

export default createStore;