<template>
  <div class="new-article-page">
    <section class="new-article">
      <newArticleForm @submit="onSubmit"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import newArticleForm from "@/components/articles/newArticleForm.vue";

export default {
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
      this.$store.dispatch('addArticlePreview', article)
        .then(() => {
          this.$router.push('/admin/articles');
        });
    }
  }
};
</script>
