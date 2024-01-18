<template>
    <hedaer>
        <nav class="navbar">
            <div class="logo-title">
                <h1>Linda Souza</h1>
            </div>
            <MenuMobile />
        </nav>
    </hedaer>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import MenuMobile from './MenuMobile.vue';

export default defineComponent({
    name: 'Navbar',
    components: { MenuMobile }
});
</script>

<style scoped>
@import '@/assets/main.css';

.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-title{
    color: var(--color-black);
    font-size: 16px;
    font-weight: 600;
}
</style>