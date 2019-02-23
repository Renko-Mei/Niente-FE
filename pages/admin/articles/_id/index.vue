<template>
  <div class="admin-post-page">
    <section class="update-form">
      <NewPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import NewPostForm from "@/components/articles/NewPostForm.vue";

export default {
  layout: 'admin',
  components: {
    NewPostForm
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
