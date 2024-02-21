<template>
    <TitleDefault text="Meus projetos" />
    <div class="container-projects">
        <div v-for="project of projects" :key="project.id">
            <Card :description="project.description" :img-card="project.img" :link="project.link" :title="project.title" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import TitleDefault from '@/components/TitleDefault.vue';
import Card from '@/components/Card.vue';
import projects from '@/data/projects.json';

export default defineComponent({
    name: 'Projects',
    components: { ContainerPage, TitleDefault, Card },
    data() {
        return {
            projects
        }
    },
});
</script>

<style scoped>
@import '@/assets/main.css';


.container-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
}

@media screen and (min-width: 796px) {
    .container-projects {
        flex-wrap: wrap;
        flex-direction: row;
        gap: 65px;
    }
}
</style>