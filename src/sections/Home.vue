<template>
    <ContainerPage :style-home="true">
        <div>
            <ResizeImg :img-mobile="profileMobile" :img-laptop="profileLaptop" text-alt="Imagem de perfil" />
        </div>
        <div class="area-desc">
            <span>Oioi! Eu sou a</span>
            <div class="area-texts">
                <div class="area-role">
                    <h1>Linda Souza!</h1>
                    <h3>Product Designer Júnior (UX/UI)</h3>
                </div>
                <p>
                    Sou apaixonada pelo universo da Experiência do Usuário, com uma pitada de conhecimento em
                    desenvolvimento
                    front-end. Foco em resolver problemas e criar produtos digitais que fazem a diferença, utilizando
                    ferramentas e processos de UX/UI centradas na experiência do usuário.
                    Estou sempre aberta a novos desafios e oportunidades de aprendizado, pronta para trazer minha paixão
                    pela UX/UI para a mesa e contribuir com energia positiva em projetos super legais!
                </p>
                <span>Vamos criar experiências incríveis juntos?</span>
            </div>
            <div class="area-icons">
                <button @click="redirectSocialMedia('https://www.linkedin.com/in/lindassouza/')">
                    <img src="@/assets/icons/linkedin-com.svg" />
                </button>
                <button @click="redirectSocialMedia('https://medium.com/@lindassouza')">
                    <img src="@/assets/icons/medium-com.svg" />
                </button>
                <button @click="redirectSocialMedia('http://www.behance.net/lindassouza')">
                    <img src="@/assets/icons/behance-com.svg" />
                </button>
                <button @click="redirectSocialMedia('mailto:linda.15brandao@gmail.com')">
                    <img src="@/assets/icons/gmail-com.svg" />
                </button>
            </div>
            <div class="area-button">
                <ButtonOutline text="Visualizar  CV" :function-click="downloadCV" />
            </div>
        </div>
    </ContainerPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import ButtonOutline from '@/components/ButtonOutline.vue';
import ResizeImg from '@/components/ResizeImg.vue';

import profileMobile from '@/assets/images/profile-mobile.png';
import profileLaptop from '@/assets/images/profile-laptop.png';

export default defineComponent({
    name: 'Home',
    components: { ContainerPage, ButtonOutline, ResizeImg },
    data() {
        return {
            isWideScreen: window.innerWidth > 769,
            profileMobile,
            profileLaptop
        };
    },
    computed: {
        profilePath(): string {
            return this.isWideScreen ? profileLaptop : profileMobile;
        }
    },
    methods: {
        redirectSocialMedia(link: string) {
            window.location.href = link;
        },
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
    gap: 8px;
}

.area-desc span {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 400;
}

.area-texts {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.area-texts p {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
}

.area-texts span {
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 600;
}

.area-role h1 {
    color: var(--color-orange);
    font-size: 32px;
    font-weight: 700;
}

.area-role h3 {
    color: var(--color-blue);
    font-size: 16px;
    font-weight: 600;
}

.area-icons {
    display: flex;
    gap: 10px;
}

.area-icons button {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.area-button{
    z-index: 99;
    margin-bottom: 40px;
}

@media screen and (min-width: 796px) {
    .area-desc {
        gap: 24px;
    }

    .area-desc span {
        font-size: 16px;
    }

    .area-role h1 {
        font-size: 56px;
    }

    .area-role h3 {
        font-size: 24px;
    }

    .area-texts p {
        max-width: 648px;
        font-size: 16px;
        line-height: 28px;
    }

    .area-texts span {
        font-size: 18px;
    }

    .area-icons {
        gap: 16px;
    }

    .area-button{
        max-width: 364px;
    }
}
</style>