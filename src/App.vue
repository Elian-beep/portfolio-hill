<template>
    <main class="general-container">
        <div>
            <Navbar />
            <router-view></router-view>
        </div>
        <FooterDefault />
    </main>
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
.general-container div {
    padding: 32px;
}

@media screen and (min-width: 796px) {
    .general-container {
        max-width: 1128px;
        margin: 0 auto
    }

    .general-container div{
        margin-bottom: 200px;
    }
}
</style>