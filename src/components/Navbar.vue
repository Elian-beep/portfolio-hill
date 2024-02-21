<template>
    <header >
        <nav class="navbar">
            <div class="logo-title">
                <h1>Linda Souza</h1>
            </div>
            <MenuMobile v-if="!isWideScreen" />
            <MenuLaptop v-if="isWideScreen" />
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuMobile from './MenuMobile.vue';
import MenuLaptop from './MenuLaptop.vue';

export default defineComponent({
    name: 'Navbar',
    components: { MenuMobile, MenuLaptop },
    data() {
        return {
            isWideScreen: window.innerWidth > 769
        };
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

header {
    background: var(--color-white);
    padding: 16px 32px;
    position: fixed;
    width: 85%;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-title {
    color: var(--color-black);
    font-size: 10px;
    font-weight: 600;
}

@media screen and (min-width: 796px) {
    header{
        -webkit-box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.42);
        -moz-box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.42);
        box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.42);
        width: 100%;
    }
    
    .navbar{
        margin: 0 auto;
        max-width: 1128px;
    }
    .logo-title {
        font-size: 16px;
        padding: 16px 0;
    }
}
</style>