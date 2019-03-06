<template>
  <div class="edit-article-page">
    <section class="edit-form">
      <newArticleForm :oldArticle="article" @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import newArticleForm from "@/components/articles/newArticleForm.vue";

export default {
  components: {
    newArticleForm
  },
  middleware: 'auth',
  asyncData(context) {
    return context.app.$axios
      .$get(process.env.baseUrl + "/articles/" + context.params.id)
      .then(data => {
        let article = data;
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
