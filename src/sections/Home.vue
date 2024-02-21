<template>
        <div>
            <ResizeImg :img-mobile="profileMobile" :img-laptop="profileLaptop" text-alt="Imagem de perfil" />
        </div>
        <div class="area-desc">
            <div class="area-role">
                <span>Oioi! Eu sou a</span>
                <h1>Linda Souza!</h1>
                <h3>Product Designer (UX/UI)</h3>
            </div>
            <div class="description">
                <p>
                    Sou apaixonada pelo universo da Experiência do Usuário, com uma pitada de conhecimento em
                    desenvolvimento
                    front-end. Foco em resolver problemas e criar produtos digitais que fazem a diferença, utilizando
                    ferramentas e processos de UX/UI centradas na experiência do usuário.
                </p>
            </div>
            <div class="area-desc-footer">
                <span>Vamos criar experiências incríveis juntos?</span>
                <div class="area-button">
                    <ButtonDefault pre-style="solid" text="Entrar em contato" :function-click="downloadCV" />
                </div>
                <div class="area-button">
                    <ButtonDefault pre-style="outline" text="Baixar Currículo" :function-click="() => null" />
                </div>
            </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import ButtonDefault from '@/components/ButtonDefault.vue';
import ResizeImg from '@/components/ResizeImg.vue';

import profileMobile from '@/assets/images/profile-mobile.png';
import profileLaptop from '@/assets/images/profile-laptop.png';

export default defineComponent({
    name: 'Home',
    components: { ContainerPage, ButtonDefault, ResizeImg },
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
            window.open("https://docs.google.com/document/d/11Mhqm_i8II19DEpWXh8NlO5_zFM76yC4vPGHVVxFHnE/edit?usp=sharing", '_blank');
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.area-desc, .area-desc-footer {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.area-role {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.area-role span {
    color: var(--color-blue);
    font-size: 14px;
    font-weight: 500;
}

.area-role h1 {
    color: var(--color-orange);
    font-size: 32px;
    font-weight: 700;
}

.area-role h3 {
    color: var(--color-blue);
    font-style: italic;
    font-size: 16px;
    font-weight: 600;
}

.area-desc p {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: justify;
}

@media screen and (min-width: 796px) {
    .area-desc {
        gap: 24px;
    }
    
    .area-role{
        gap: 8px;
    }

    .area-role span {
        font-size: 18px;
    }

    .area-role h1 {
        font-size: 48px;
    }

    .area-role h3 {
        font-size: 20px;
    }

    .description{
        max-width: 648px;
    }

    .area-texts p {
        font-size: 18px;
        line-height: 28px;
    }

    .area-texts span {
        font-size: 18px;
    }

    .area-icons {
        gap: 16px;
    }

    .area-button {
        max-width: 364px;
    }
}
</style>