<template>
    <nuxt-link :to="'/articles/' + id" class="article-preview">
        <article>
            <img alt="thumbnail" class="article-thumbnail" :src="thumbnail"/>
            <div class="preview-content">
                <h1>{{ title }}</h1>
                <p>{{ subtitle }}</p>
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
        subtitle: {
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
    min-width: 468px;
    width: 24vw;
    min-height: 240px;
    height: 20vw;
    position: relative;
}
.article-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.preview-content {
    position: absolute;
    margin: auto;
    width: 100%;
    bottom: 0px;
    text-align: center;
    color: #000;
}

a:hover .preview-content,
a:active .preview-content {
    background-color: #ccc;
}
</style>
