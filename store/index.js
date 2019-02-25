import Vuex from 'vuex';
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArticlePreviews: []
    },
    mutations: {
      // post: payload
      setArticlePreviews(state, previews) {
        state.loadedArticlePreviews = previews;
      }
    },
    actions: {
      setArticlePreviews(veuxContext, previews) {
        veuxContext.commit('setArticlePreviews', previews);
      },
      async nuxtServerInit(veuxContext, context) {
        try {
          console.log("Getting response from the server...");
          let res = await axios.get("https://niente-177123.appspot.com/api/articlepreviews/");
          veuxContext.commit('setArticlePreviews', res.data);
        }
        catch (e) {
          console.log(e);
          context.error(e);
        }
      }
    },
    getters: {
      loadedArticlePreviews(state) {
        return state.loadedArticlePreviews;
      }
    }
  });
}

export default createStore;