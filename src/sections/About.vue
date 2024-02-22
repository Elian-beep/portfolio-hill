<template>
        <TitleDefault text="Sobre mim" />
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
        </div>
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

.area-desc {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

p {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: justify;
}

span {
    color: var(--color-blue);
    font-weight: 600;
}


@media screen and (min-width: 796px) {

    p {
        font-size: 18px;
        line-height: 28px;
        text-align: left;
    }

    .area-button {
        width: 50%;
    }
}
</style>