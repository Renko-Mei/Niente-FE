import Vuex from 'vuex';

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
          const data = await this.$axios.$post(process.env.baseUrl + '/articles/', article);
          veuxContext.commit('addArticlePreview', { id: data.id, ...article });
        }
        catch (e) {
          return console.log(e);
        }
      },
      async editArticlePreview(veuxContext, article) {
        const data = await this.$axios.$put(process.env.baseUrl + '/articles/' + article.id, article);
        veuxContext.commit('editArticlePreview', data);
      },
      async nuxtServerInit(veuxContext, context) {
        try {
          let limit = 5; // auto calculate this value based on screensize?
          let data = await context.app.$axios.$get("/articlepreviews/?limit=" + String(limit));
          veuxContext.commit('setArticlePreviews', data);
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