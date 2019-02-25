<template>
  <div class="admin-post-page">
    <section class="update-form">
      <newArticleForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import newArticleForm from "@/components/articles/newArticleForm.vue";

export default {
  //layout: 'admin',
  components: {
    newArticleForm
  },
  data() {
    return {
      loadedPost: {
        author: 'aaa',
        title: 'My post',
        content: 'Amazing',
        thumbnailLink: 'bad link'
      }
    }
  }
};
</script>
