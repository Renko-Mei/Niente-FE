<template>
    <nuxt-link :to="'/articles/' + id" class="article-preview">
        <article>
            <img alt="thumbnail" class="article-thumbnail" :src="thumbnail"/>
            <div class="preview-content">
                <h1>{{ title }}</h1>
                <p>{{ shortText }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: 'ArticlePreview',
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        shortText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
article {
    position: relative;
}
.article-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}

.preview-content {
    position: absolute;
    margin: auto;
    width: 100%;
    bottom: 0px;
    padding: 10px;
    text-align: center;
    color: #000;
}

a:hover .preview-content,
a:active .preview-content {
    background-color: #ccc;
}
</style>
