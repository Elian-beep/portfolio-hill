<template>
    <main>
        <section :class="{ styleHome : styleHome }">
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
    props: {
        styleHome: {
            type: Boolean,
            required: false,
        }
    }
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
    .styleHome{
        flex-direction: row-reverse;
        justify-content: space-between;
    }
}
</style>