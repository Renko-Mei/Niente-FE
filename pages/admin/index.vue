<template>
  <div class="admin-page">
    <section class="new-article">
      <AppButton @click="$router.push('/admin/articles/new')">
        Create Article
      </AppButton>
    </section>
    <section class="existing-articles">
      <h1>
        <nuxt-link to="/admin/articles">
          Existing Articles
        </nuxt-link>
      </h1>
    </section>
  </div>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
export default {
  // layout: 'admin',
  components: {
    AppButton
  },
  middleware: 'auth'
}
</script>
