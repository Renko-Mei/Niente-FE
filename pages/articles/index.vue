<template>
    <div class="articles-page">
        <h1>Articles</h1>
        <ul v-if="articles && articles.length">
            <li v-for="article in articles" :key="article.id">
                <p><strong>{{article.title}}</strong></p>
                <p>{{article.content}}</p>
                <articlePreview
                    :id = "article.id"
                    :title = "article.title"
                    shortText = "Nothing here"
                    :thumbnail = "'/images/article' + article.id + '.jpg'"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";
import articlePreview from "~/components/articles/preview"

export default {
    data() {
        return {
            articles: [],
        };
    },
    components: {
        articlePreview
    },

    async mounted() {
        try {
            const response = await axios.get('http://localhost:43366/api/Articles/');
            this.articles = response.data
        } catch (e) {
            console.log(e.message);
        }
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
}
/* .articles-page {
    display: flex;
    justify-content: center;
    align-items: center;
} */
ul {
    display: block;
    padding: 0;
}
li {
    margin: auto;
    width: 40%;
    display: table;
    margin: 0 auto;
}
</style>
