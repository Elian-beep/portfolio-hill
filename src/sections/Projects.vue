<template>
    <ContainerPage>
        <TitleDefault text="Projetos" />
        <div class="container-projects">
            <Card 
                :description="description"
                :img-card="capaAgendaConsultas"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch para mais uma terceira linha no titulo"
            />
            <Card 
                :description="description"
                :img-card="capaAgendaConsultas"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch para mais uma terceira linha no titulo"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
            <Card 
                :description="description"
                :img-card="capaChuva"
                link="https://sites.google.com/view/lindasouza"
                title="Estudo de caso UX/UI: Plataforma de video aula Code Scratch"
            />
        </div>
    </ContainerPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import TitleDefault from '@/components/TitleDefault.vue';
import Card from '@/components/Card.vue';

import capaAgendaConsultas from '@/assets/images/capas/capa_Agenda_de_Consultas.png';
import capaChuva from '@/assets/images/capas/capa_Exercicio_-_Chuva.png';

export default defineComponent({
    name: 'Projects',
    components: { ContainerPage, TitleDefault, Card },
    data() {
        return {
            capaAgendaConsultas,
            capaChuva
        }
    },
    computed: {
        description(): string {
            return "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident, quasi nostrum ab fugiat vitae placeat corrupti earum culpa assumenda? Quo unde asperiores tempora, aliquam consequuntur quisquam amet dolor eos odit quaerat maxime, similique magni fuga! Minus rem modi deleniti!"
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.container-projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-bottom: 80px;
}

@media screen and (min-width: 796px) {
    .container-projects{
        flex-wrap: wrap;
        flex-direction: row;
        margin-bottom: -10px;
    }
}
</style>