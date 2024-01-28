<template>
    <ContainerPage>
        <TitleDefault text="Artigos" />
        <div class="container-articles">
            <div v-for="article of articles" :key="article.id">
                <Card 
                    :description="article.description"
                    :img-card="article.img"
                    :link="article.link"
                    :title="article.title"
                />
            </div>
        </div>
    </ContainerPage>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import TitleDefault from '@/components/TitleDefault.vue';
import ContainerPage from '@/components/ContainerPage.vue';
import Card from '@/components/Card.vue';
import articles from '@/data/articles.json';

export default defineComponent({
    name: 'Articles',
    components: {TitleDefault, ContainerPage, Card},
    data() {
        return {
            articles,
        }
    },
});
</script>

<style scoped>
@import '@/assets/main.css';

.container-articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 80px;
}

@media screen and (min-width: 796px){
    .container-articles{
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: -10px;
    }
}

</style>