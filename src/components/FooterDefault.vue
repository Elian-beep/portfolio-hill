<template>
    <footer>
        <span>2024 Linda Souza | Product Designer (UX/UI)</span>
    </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
    name: 'FooterDefault',
});
</script>

<style scoped>
@import '@/assets/main.css';

footer{
    position: absolute;
    bottom: 12px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

footer span{
    font-size: 8px;
    font-weight: 400;
    color: var(--color-black);
}

</style>