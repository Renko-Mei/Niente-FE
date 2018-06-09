<template>
    <div class="single-article-page">
        <section class="article">
            <h1>{{ article.title }}</h1>
            <div class="article-detail">
                <div>Created at {{ article.createDate }}</div>
                <div>Last updated on {{ article.lastEditDate }}</div>
            </div>
            <p>{{ article.content }}</p>
        </section>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            query_url: "",
            article: {},
        };
    },
    async mounted() {
        try {
            this.query_url = 'http://localhost:43366/api/Articles/' + this.$route.params.id;
            const response = await axios.get(this.query_url);
            this.article = response.data;
        } catch (e) {
            console.log(e.message);
        }
    }
}
</script>

