<template>
    <main>
        <section>
            <slot></slot>
        </section>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    name: 'ContainerPage',
    components: { Navbar },
});
</script>

<style scoped>
@import '@/assets/main.css';

main {
    padding-top: 24px;
    max-width: 1128px;
    margin-bottom: 20px;
}

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

@media screen and (min-width: 796px){
}
</style>