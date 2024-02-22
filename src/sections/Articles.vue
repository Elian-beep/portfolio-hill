<template>
    <TitleDefault text="Artigos" />
    <div class="articles-content">
        <div v-for="article of articles" :key="article.id">
            <Card :description="article.description" :img-card="article.img" :link="article.link" :title="article.title" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TitleDefault from '@/components/TitleDefault.vue';
import ContainerPage from '@/components/ContainerPage.vue';
import Card from '@/components/Card.vue';
import articles from '@/data/articles.json';

export default defineComponent({
    name: 'Articles',
    components: { TitleDefault, ContainerPage, Card },
    data() {
        return {
            articles,
        }
    },
});
</script>

<style scoped>
@import '@/assets/main.css';

.articles-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
}

@media screen and (min-width: 796px) {
    .articles-content {
        flex-wrap: wrap;
        flex-direction: row;
        gap: 65px;
    }
}
</style>