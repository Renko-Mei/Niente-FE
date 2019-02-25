<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="articleToEdit.title">Title</AppControlInput>
    <AppControlInput v-model="articleToEdit.previewText">Preview Text or Introduction</AppControlInput>
    <AppControlInput v-model="articleToEdit.previewImageUri">Preview Image Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="articleToEdit.body">Body</AppControlInput>
    <AppButton type="submit">Save</AppButton>

    <AppButton type="button" style="margin-left: 10px" btn-style="cancel" @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
import AppControlInput from "@/components/UI/AppControlInput";
import AppButton from "@/components/UI/AppButton";
export default {
  components: {
    AppButton,
    AppControlInput
  },
  props: {
    oldArticle: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      // If the old article exists, use the old article data
      // Otherwise start with a blank article
      articleToEdit: this.oldArticle
        ? { ...this.oldArticle }
        : {
            title: "",
            previewText: "",
            body: "",
            previewImageUri: "",
            imageUris: []
          }
    };
  },
  methods: {
    onSave() {
      // save teh post
      this.$emit('submit', this.articleToEdit)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>