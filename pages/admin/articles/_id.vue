<template>
  <div class="admin-post-page">
    <section class="update-form">
      <newArticleForm :oldArticle="article"/>
    </section>
  </div>
</template>

<script>
import newArticleForm from "@/components/articles/newArticleForm.vue";
import axios from 'axios';

export default {
  components: {
    newArticleForm
  },
  asyncData({ params, error }) {
    return axios
      .get(process.env.baseUrl + '/articles/' + params.id)
      .then(res => {
        let article = res.data;
        return { article };
			})
			.catch(e => {
				error({ statusCode: 404, message: 'Article not found' });
			});
  },
  data() {
    return {
      article: {}
    }
  }
};
</script>
