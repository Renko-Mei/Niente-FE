export const state = () => ({
  previews: []
})

export const mutations = {
  setPreviews(state, data) {
    state.previews = data
  },
  addPreview(state, data) {
    if ('Body' in data) {
      delete data['Body']
    }
    state.previews.push(data)
  },
  editPreview(state, data) {
    const index = state.previews.findIndex(
      preview => preview.id === data.id
    )
    if ('Body' in data) {
      delete data['Body']
    }
    // Load the full article maybe?
    state.previews[index] = data
  }
}

export const actions = {
  setPreviews(veuxContext, previews) {
    veuxContext.commit('setPreviews', previews)
  },
  async addPreview(veuxContext, article) {
    const data = await this.$axios.$post('/articles/', article)
    veuxContext.commit('addPreview', { id: data.id, ...article })
  },
  async editPreview(veuxContext, article) {
    const data = await this.$axios.$put('/articles/' + article.id, article)
    veuxContext.commit('editPreview', data)
  }
}

export const getters = {
  previews(state) {
    return state.previews
  }
}
