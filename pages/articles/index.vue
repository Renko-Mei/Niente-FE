<template>
  <el-container>
    <el-header>
      <h1>Articles</h1>
    </el-header>
    <el-main>
      <ul v-if="previews && previews.length" class="article-preview-container">
        <Preview
          v-for="pv in previews"
          :key="pv.id"
          :id="pv.id"
          :title="pv.title"
          :previewText="pv.previewText"
          :previewImageUri="'/images/article' + pv.id + '.jpg'"
          :for-edit="false"
        />
      </ul>
    </el-main>
  </el-container>
</template>

<script>
import Preview from "~/components/articles/Preview";
import { mapGetters } from "vuex";

export default {
  components: {
    Preview
  },
  computed: mapGetters({
    previews: "article/get"
  })
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
