<template>
  <el-container>
    <el-header>
      <h1>{{ article.title }}</h1>
    </el-header>
    <el-main>
      <div class="article-detail">
        <h2>{{ article.previewText }}</h2>
        <div>Created on {{ article.createAt | date }}</div>
        <div>Last updated on {{ article.lastEditAt | date }}</div>
      </div>
      <vue-markdown :source="article.body" />
    </el-main>
  </el-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      query_url: '',
      article: {}
    }
  },
  asyncData(context) {
    return context.app.$axios
      .$get('/articles/' + context.params.id)
      .then((data) => {
        const article = data
        return { article }
      })
      .catch((e) => {
        // error({ statusCode: 404, message: 'Article not found' })
      })
  }
}
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
</style>
