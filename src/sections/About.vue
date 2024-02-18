<template>
    <ContainerPage>
        <TitleDefault text="Sobre" />
        <div class="content-about">
            <ResizeImg :img-mobile="profileMobile" :img-laptop="profileLaptop" text-alt="Imagem de perfil" />
            <div class="area-desc">
                <p>
                    Sou <span>Product Designer</span> com uma pitada de conhecimento em desenvolvimento front-end. Graduanda
                    em
                    Ciência da
                    Computação pela Universidade do Estado do Amazonas (UEA) e com formações por meio de cursos e livros em
                    <span>Experiência do Usuário.</span>
                </p>
                <p>
                    Desde criança, meu interesse pelo design foi influenciado por meus pais, fotógrafos,
                    e cresci explorando ferramentas como Adobe Photoshop, Corel Draw e Adobe Lightroom, alimentando minha
                    criatividade.
                </p>
                <p>
                    Em 2023, descobri o universo da Experiência do Usuário e tenho me dedicado a aprender através
                    de cursos, leituras e prática.
                </p>
                <p>
                    Adquiri <span>habilidades</span> em: Pesquisas com usuários, Criação de personas e
                    proto-personas, Metodologia do Design Thinking, Design de Interface (UI), Criação de protótipos de
                    baixa,
                    média e alta fidelidade (Wireframes), Tipografia, Teoria das cores, Styleguide, Design System, Design
                    Token,
                    Acessibilidade, Hierarquia e Figma.
                </p>
                <p>
                    Estou ansiosa para aplicar minha experiência e conhecimento em projetos
                    desafiadores e contribuir para a criação de experiências significativas para os usuários.
                </p>
                <!-- <div class="area-button">
                    <ButtonDefault text="Baixa Currículo" :function-click="downloadCV" />
                </div> -->
            </div>
        </div>
    </ContainerPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import TitleDefault from '@/components/TitleDefault.vue';
import ResizeImg from '@/components/ResizeImg.vue';
import ButtonDefault from '@/components/ButtonDefault.vue';

import profileMobile from '@/assets/images/profile-mobile.png';
import profileLaptop from '@/assets/images/profile-laptop.png';

export default defineComponent({
    name: 'About',
    components: { ContainerPage, TitleDefault, ResizeImg, ButtonDefault },
    data() {
        return {
            isWideScreen: window.innerWidth > 769,
            profileMobile,
            profileLaptop
        };
    },
    methods: {
        downloadCV() {
            window.location.assign("https://docs.google.com/document/d/10bWGnK8tAy7Bzy1uXlVvVUZK5G7sWRkfU8MbLLbbqAg/edit");
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.content-about {
    margin-bottom: 80px;
}

.area-desc,
.content-about {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    margin-top: 16px;
    color: var(--color-black);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: justify;
}

span {
    color: var(--color-blue);
    font-weight: 700;
}

.area-button {
    margin-top: 40px;
    width: 100%;
}


@media screen and (min-width: 796px) {
    .content-about {
        margin-bottom: -20px;
        display: flex;
        flex-direction: row-reverse;
        gap: 80px;
        align-items: center;
    }

    p {
        font-size: 16px;
        line-height: 28px;
    }

    .area-button {
        width: 50%;
    }
}
</style>