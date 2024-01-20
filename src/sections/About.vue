<template>
    <ContainerPage>
        <img src="@/assets/images/work-women.svg" alt="mulher cartoon trabalhando com design">
        <div class="area-desc">
            <TitleDefault text="Sobre" />
            <p>
                Sou <span>Product Designer</span> com uma pitada de conhecimento em desenvolvimento front-end. Graduanda em Ciência da
                Computação pela Universidade do Estado do Amazonas (UEA) e com formações por meio de cursos e livros em
                <span>Experiência do Usuário.</span> Desde criança, meu interesse pelo design foi influenciado por meus pais, fotógrafos,
                e cresci explorando ferramentas como Adobe Photoshop, Corel Draw e Adobe Lightroom, alimentando minha
                criatividade. Em 2023, descobri o universo da Experiência do Usuário e tenho me dedicado a aprender através
                de cursos, leituras e prática. Adquiri <span>habilidades</span> em: Pesquisas com usuários, Criação de personas e
                proto-personas, Metodologia do Design Thinking, Design de Interface (UI), Criação de protótipos de baixa,
                média e alta fidelidade (Wireframes), Tipografia, Teoria das cores, Styleguide, Design System, Design Token,
                Acessibilidade, Hierarquia e Figma. Estou ansiosa para aplicar minha experiência e conhecimento em projetos
                desafiadores e contribuir para a criação de experiências significativas para os usuários.
            </p>
        </div>
    </ContainerPage>
    <!-- <FooterImgDefault :is-home="false" /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import TitleDefault from '@/components/TitleDefault.vue';
import FooterImgDefault from '@/components/FooterImgDefault.vue';

export default defineComponent({
    name: 'About',
    components: { ContainerPage, TitleDefault, FooterImgDefault }
});
</script>

<style scoped>
@import '@/assets/main.css';

p{
    margin-top: 16px;
    color: var(--color-black);
    font-size: 12px;
    font-weight: 500;
    text-align: justify;
}

span{
    color: var(--color-blue);
    font-weight: 700;
}

.area-desc{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>