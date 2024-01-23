<template>
    <hedaer>
        <nav class="navbar">
            <div class="logo-title">
                <h1>Linda Souza</h1>
            </div>
            <MenuMobile v-if="!isWideScreen" />
            <MenuLaptop v-if="isWideScreen" />
        </nav>
    </hedaer>
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

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-title {
    color: var(--color-black);
    font-size: 12px;
    font-weight: 600;
}

@media screen and (min-width: 796px){
    .logo-title{
        font-size: 16px;
        padding: 16px 0;
    }
}
</style>