<template>
    <ContainerPage>
        <h1>About</h1>
    </ContainerPage>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import ContainerPage from '@/components/ContainerPage.vue';

export default defineComponent({
    name: 'About',
    components: {ContainerPage}
});
</script>

<style scoped>
@import '@/assets/main.css';

</style>