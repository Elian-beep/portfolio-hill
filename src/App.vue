<template>
    <main class="general-container">
        <Navbar />
        <router-view></router-view>
    </main>
    <FooterDefault />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import FooterDefault from './components/FooterDefault.vue';

export default defineComponent({
    name: '',
    components: { Navbar, FooterDefault },
});
</script>

<style scoped>
@import '@/assets/main.css';

.general-container {
    padding: 16px 32px;
    margin-bottom: 46px;
}

@media screen and (min-width: 796px){
    .general-container{
        max-width: 1128px;
        margin: 0 auto;
    }
}
</style>