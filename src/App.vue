<template>
    <Navbar />
    <router-view></router-view>
    <!-- <FooterDefault /> -->
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './sections/Home.vue';
import FooterDefault from './components/FooterDefault.vue';

export default defineComponent({
    name: '',
    components: { Navbar, Home, FooterDefault }
});
</script>

<style>
@import '@/assets/main.css';

</style>