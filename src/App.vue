<template>
    <Navbar />
    <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Navbar from './components/Navbar.vue';
import Home from './sections/Home.vue';

export default defineComponent({
    name: '',
    components: { Navbar, Home }
});
</script>

<style>
@import '@/assets/main.css';

</style>