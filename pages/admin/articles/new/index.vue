<template>
  <div class="new-article-page">
    <section class="new-article">
      <NewPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import NewPostForm from "@/components/articles/NewPostForm.vue";

export default {
  layout: "admin",
  components: {
    NewPostForm
  },
  data() {
    return {
      editedPost: {
        author: "",
        title: "",
        thumbnailLink: "",
        content: ""
      }
    };
  },
  methods: {
    onSubmitted(postData) {
      axios.post('https://niente-177123.appspot.com/api/articles/', postData)
           .then(res => console.log(res))
           .catch(e => console.log(e));
    }
  }
};
</script>
