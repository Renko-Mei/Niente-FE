<template>
  <el-container>
    <el-header>
      <h1>Article Admin</h1>
    </el-header>
    <el-main>
      <ul v-if="articlePreviews && articlePreviews.length" class="article-preview-container">
        <Preview
          v-for="preview in articlePreviews"
          :key="preview.id"
          :id="preview.id"
          :title="preview.title"
          :previewText="preview.previewText"
          :previewImageUri="'/images/article' + preview.id + '.jpg'"
          :for-edit="true"
        />
      </ul>
    </el-main>
  </el-container>
</template>

<script>
import Preview from "~/components/articles/Preview";

export default {
  components: {
    Preview
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
