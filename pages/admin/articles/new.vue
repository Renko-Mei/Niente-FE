<template>
  <div class="new-article-page">
    <section class="new-article">
      <newArticleForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import newArticleForm from "@/components/articles/newArticleForm.vue";

export default {
  middleware: 'auth',
  //layout: "admin",
  components: {
    newArticleForm
  },
  data() {
    return {
      articleToEdit: {
        title: "",
        body: "",
        previewText: "",
        previewImageUri: "",
        imageUris: []
      }
    };
  },
  methods: {
    onSubmit(article) {
      this.$store.dispatch('addPreview', article)
        .then(() => {
          this.$router.push('/admin/articles');
        });
    }
  }
};
</script>
