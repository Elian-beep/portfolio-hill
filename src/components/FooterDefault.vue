<template>
    <footer>
        <span>2024 Linda Souza | Product Designer (UX/UI)</span>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FooterDefault',
    data() {
        return {
            isWideScreen: window.innerWidth > 769,
        };
    },
});
</script>

<style scoped>
@import '@/assets/main.css';

footer {
    display: flex;
    align-items: end;
    justify-content: center;
    width: 100%;
}

footer span {
    padding: 24px;
    margin-top: 48px;
    font-size: 12px;
    font-weight: 500;
    color: var(--color-black);
}

@media screen and (min-width: 796px){
    footer span{
        font-size: 12px;
    }
}
</style>