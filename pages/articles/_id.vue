<template>
  <el-container>
    <el-header>
      <h1>{{ article.title }}</h1>
    </el-header>
    <el-main>
      <div class="article-detail">
        <div>Created at {{ article.createAt }}</div>
        <div>Last updated on {{ article.lastEditAt }}</div>
      </div>
      <vue-markdown :source="article.body"/>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";
import VueMarkdown from "vue-markdown";

export default {
  components: {
    VueMarkdown
  },
  asyncData({ params, error }) {
    return axios
      .get('https://niente-177123.appspot.com/api/articles/' + params.id)
      .then(res => {
        let article = res.data;
        return { article };
			})
			.catch(e => {
				error({ statusCode: 404, message: 'Article not found' });
			});
  },
  data() {
    return {
      query_url: "",
      article: {}
    };
  }
};
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
</style>
