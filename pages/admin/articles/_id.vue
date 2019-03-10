<template>
  <div class="edit-article-page">
    <section class="edit-form">
      <newArticleForm :oldArticle="article" @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import newArticleForm from '@/components/articles/newArticleForm.vue'

export default {
  components: {
    newArticleForm
  },
  middleware: 'auth',
  data() {
    return {
      article: {}
    }
  },
  async asyncData(context) {
    const article = await context.app.$axios.$get('/articles/' + context.params.id)
    return { article }
  },
  methods: {
    onSubmit(article) {
      this.$store.dispatch('article/editPreview', article).then(() => {
        this.$router.push('/admin/articles')
      })
    }
  }
}
</script>
