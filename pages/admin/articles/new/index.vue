<template>
  <div class="new-article-page">
    <section class="new-article">
      <NewPostForm/>
    </section>
  </div>
</template>

<script>
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
    onSave() {
      // save teh post
      console.log(this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>
