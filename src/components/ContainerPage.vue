<template>
    <main class="main">
        <slot></slot>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    name: 'ContainerPage',
    components: { Navbar }
});
</script>

<style scoped>
@import '@/assets/main.css';

.main {
    padding-top: 24px;
    max-width: 1128px;
}
</style>