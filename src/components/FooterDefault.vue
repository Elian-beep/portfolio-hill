<template>
    <footer>
        <img :src="footerPath" alt="efeito laranja de rodapé">
        <!-- <ResizeImg :img-mobile="footerMobile" :img-laptop="footerLaptop" text-alt="efeito laranja de rodapé" /> -->
        <span>2024 Linda Souza | Product Designer (UX/UI)</span>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ResizeImg from './ResizeImg.vue';

import footerMobile from '@/assets/images/footer-mobile.svg';
import footerLaptop from '@/assets/images/footer-laptop.svg';

export default defineComponent({
    name: 'FooterDefault',
    components: {ResizeImg},
    data() {
        return {
            isWideScreen: window.innerWidth > 769,
            footerMobile,
            footerLaptop
        };
    },
    computed: {
        footerPath(): string {
            return this.isWideScreen ? footerLaptop : footerMobile;
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

footer {
    /* position: absolute;
    left: 0;
    bottom: 0; */
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
    padding-bottom: 12px;
}

footer img {
    width: 100%;
    z-index: 9;
    position: absolute;
    bottom: 0;
}

footer span {
    position: absolute;
    bottom: 12px;
    z-index: 99;
    font-size: 8px;
    font-weight: 400;
    color: var(--color-black);
}

@media screen and (min-width: 796px){
    footer span{
        font-size: 12px;
    }
}
</style>