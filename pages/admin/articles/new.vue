<template>
  <div class="new-article-page">
    <section class="new-article">
      <newArticleForm @submit="onSubmitted"/>
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
    onSubmitted(newArticle) {
      axios.post('https://niente-177123.appspot.com/api/articles/', newArticle)
           .then(res => {
             console.log(res);
             this.$router.push('/admin/articles');
           })
           .catch(e => console.log(e));
    }
  }
};
</script>
