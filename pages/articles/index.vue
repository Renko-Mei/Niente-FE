<template>
  <el-container>
    <el-header>
      <h1>Articles</h1>
    </el-header>
    <el-main>
      <ul v-if="articlePreviews && articlePreviews.length" class="article-preview-container">
        <articlePreview
          v-for="preview in articlePreviews"
          :key="preview.id"
          :id="preview.id"
          :title="preview.title"
          :previewText="preview.previewText"
          :previewImageUri="'/images/article' + preview.id + '.jpg'"
          :for-edit=false
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
    articlePreviews() {
      return this.$store.getters.loadedArticlePreviews;
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
