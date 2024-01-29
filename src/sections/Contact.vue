<template>
    <ContainerPage>
        <TitleDefault text="Contato" />
        <p class="invite-text">
            Você pode entrar em contato comigo através das redes sociais abaixo ou via email:
            <span @click="redirectSocialMedia('mailto:linda.15brandao@gmail.com')">linda.15brandao@gmail.com</span>
        </p>
        <div class="area-links">
            <CardContact 
                :icon="linkedin_icon" 
                link="https://www.linkedin.com/in/lindassouza/"
                text="Linkedin - conheça minha trajetória profissional." 
            />
            <CardContact 
                :icon="medium_icon" 
                link="https://medium.com/@lindassouza"
                text="Medium - conheça meus artigos e projetos publicados." 
            />
            <CardContact 
                :icon="gmail_icon" 
                link="mailto:linda.15brandao@gmail.com"
                text="Gmail - Entre em contato comigo e vamos conversar!" 
            />
        </div>
    </ContainerPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';
import TitleDefault from '@/components/TitleDefault.vue';
import CardContact from '@/components/CardContact.vue';

import linkedin_icon from '@/assets/icons/linkedin-svgrepo.png';
import medium_icon from '@/assets/icons/medium-svgrepo.png';
import gmail_icon from '@/assets/icons/gmail-svgrepo.png';

export default defineComponent({
    name: 'Contact',
    components: { ContainerPage, TitleDefault, CardContact },
    data() {
        return {
            linkedin_icon,
            medium_icon,
            gmail_icon
        }
    }, 
    methods: {
        redirectSocialMedia(link: string) {
            window.location.href = link;
        },
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.invite-text {
    color: var(--color-black);
    font-size: 14px;
    font-weight: 400;
}

.invite-text span {
    color: var(--color-blue);
    font-weight: 600;
    text-decoration: underline;
}

.area-links{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

@media screen and (min-width: 796px) {
    .invite-text{
        font-size: 18px;
    }

    .area-links{
        flex-direction: row;
        gap: 24px;
    }
}
</style>