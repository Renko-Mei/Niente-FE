<template>
    <div class="admin-page">
        <section class="new-article">
            <button @click="$router.push('/admin/articles/new')">Create Article</button>
        </section>
        <section class="existing-articles">
            <h1>Existing Articles</h1>

        </section>
    </div>
</template>
