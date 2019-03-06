<template>
  <div class="edit-article-page">
    <section class="edit-form">
      <newArticleForm :oldArticle="article" @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import newArticleForm from "@/components/articles/newArticleForm.vue";
import axios from "axios";

export default {
  components: {
    newArticleForm
  },
  asyncData({ params, error }) {
    return axios
      .get(process.env.baseUrl + "/articles/" + params.id)
      .then(res => {
        let article = res.data;
        return { article };
      })
      .catch(e => {
        error({ statusCode: 404, message: "Article not found" });
      });
  },
  data() {
    return {
      article: {}
    };
  },
  methods: {
    onSubmit(article) {
      this.$store.dispatch("editArticlePreview", article).then(() => {
        this.$router.push("/admin/articles");
      });
    }
  }
};
</script>
