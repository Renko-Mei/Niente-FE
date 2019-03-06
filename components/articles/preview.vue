<template>
  <nuxt-link class="article-preview" :to="actionLink">
    <article>
      <div
        class="article-thumbnail"
        :style="{ backgroundImage: 'url(' + previewImageUri + ')' }"
      ></div>
      <div class="article-content">
        <h1>{{ title }}</h1>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    previewText: {
      type: String,
      required: true
    },
    previewImageUri: {
      type: String,
      required: true
    },
    forEdit: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    actionLink() {
      return this.forEdit ? '/admin/articles/' + this.id : '/articles/' + this.id
    }
  }
}
</script>


<style scoped>
.article-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .article-preview {
    width: 400px;
    margin: 10px;
  }
}

.article-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.article-content {
  padding: 10px;
  text-align: center;
}

a:hover .article-content,
a:active .article-content {
  background-color: #ccc;
}
</style>
