<template>
  <el-container>
    <el-header>
      <h1>Articles</h1>
    </el-header>
    <el-main>
      <ul v-if="articles && articles.length" class="article-preview-container">
        <articlePreview
          v-for="article in articles"
          :key="article.id"
          :is-admin="isAdmin"
          :id="article.id"
          :title="article.title"
          :subtitle="article.subtitle"
          :thumbnail="'/images/article' + article.id + '.jpg'"
        />
      </ul>
    </el-main>
  </el-container>
</template>

<script>
import articlePreview from "~/components/articles/preview";

export default {
  components: {
    articlePreview
  },
  computed: {
    articles() {
      return this.$store.getters.loadedArticles;
    }
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.article-preview-container {
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;
}

ul {
  display: block;
  padding: 0;
}

.el-main {
  padding: 0;
}
</style>
