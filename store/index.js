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
      },
      addNewArticle(state, newArticle) {
        state.loadedArticlePreviews.push(newArticle);
      },
      editArticle(state, editedArticle) {
        const articleIndex = state.loadedArticlePreviews.findIndex(
          article => article.id === editedArticle.id
        );
        // Load the full article maybe? 
        state.loadedArticlePreviews[articleIndex] = editedArticle;
      }
    },
    actions: {
      setArticlePreviews(veuxContext, previews) {
        veuxContext.commit('setArticlePreviews', previews);
      },
      addArticle(veuxContext, article) {

      },
      editArticle(veuxContext, editedArticle) {

      },
      async nuxtServerInit(veuxContext, context) {
        try {
          console.log("Getting response from the server...");
          let res = await axios.get(process.env.baseUrl + "/articlepreviews/");
          veuxContext.commit('setArticlePreviews', res.data);
        }
        catch (e) {
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