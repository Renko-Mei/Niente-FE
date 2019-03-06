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
      addArticlePreview(state, preview) {
        state.loadedArticlePreviews.push(preview);
      },
      editArticlePreview(state, editedPreview) {
        const index = state.loadedArticlePreviews.findIndex(
          preview => preview.id === editedPreview.id
        );
        // Load the full article maybe? 
        state.loadedArticlePreviews[index] = editedPreview;
      }
    },
    actions: {
      setArticlePreviews(veuxContext, previews) {
        veuxContext.commit('setArticlePreviews', previews);
      },
      async addArticlePreview(veuxContext, article) {
        try {
          const res = await axios.post(process.env.baseUrl + '/articles/', article);
          veuxContext.commit('addArticlePreview', { id: res.data.id, ...article });
        }
        catch (e) {
          return console.log(e);
        }
      },
      async editArticlePreview(veuxContext, article) {
        const res = await axios.put(process.env.baseUrl + '/articles/' + article.id, article);
        veuxContext.commit('editArticlePreview', res.data);
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