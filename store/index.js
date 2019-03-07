import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedArticlePreviews: [],
      token: null
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
      },
      setJwtToken(state, token) {
        state.token = token
      }
    },
    actions: {
      setArticlePreviews(veuxContext, previews) {
        veuxContext.commit('setArticlePreviews', previews);
      },
      async addArticlePreview(veuxContext, article) {
        try {
          const data = await this.$axios.$post('/articles/', article);
          console.log(data);
          veuxContext.commit('addArticlePreview', { id: data.id, ...article });
        }
        catch (e) {
          return console.log(e);
        }
      },
      async editArticlePreview(veuxContext, article) {
        const data = await this.$axios.$put('/articles/' + article.id, article);
        veuxContext.commit('editArticlePreview', data);
      },
      async nuxtServerInit(veuxContext, context) {
        try {
          let limit = 50; // auto calculate this value based on screensize?
          let data = await context.app.$axios.$get("/articlepreviews/?limit=" + String(limit));
          veuxContext.commit('setArticlePreviews', data);
        }
        catch (e) {
          throw e;
        }
      },
      async login(veuxContext, user) {
        try {
          let data = await this.$axios.$post('/login/', user);
          veuxContext.commit('setJwtToken', data);
        }
        catch (e) {
          throw e;
        };
      }
    },
    getters: {
      loadedArticlePreviews(state) {
        return state.loadedArticlePreviews;
      },
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