<template>
    <ul class="nav-list">
        <li :class="{ 'active': currentPath == '/' }" class="nav-item"><a @click="selectLink('/')" href="#"
                class="nav-link">Home</a></li>
        <li :class="{ 'active': currentPath == '/about' }" class="nav-item"><a @click="selectLink('/about')" href="#"
                class="nav-link">Sobre</a></li>
        <li :class="{ 'active': currentPath == '/projects' }" class="nav-item"><a @click="selectLink('/projects')" href="#" class="nav-link">Projetos</a>
        </li>
        <li :class="{ active: currentPath == '/articles' }" class="nav-item"><a href="#" class="nav-link">Artigos</a></li>
        <li :class="{ active: currentPath == '/curriculum' }" class="nav-item"><a href="#" class="nav-link">Currículo</a>
        </li>
        <li :class="{ active: currentPath == '/contact' }" class="nav-item"><a href="#" class="nav-link">Contato</a></li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'MenuLaptop',
    data() {
        return {
            currentPath: this.$route.path,
        }
    },
    methods: {
        selectLink(path: string) {
            this.$router.push({ path: path });
        }
    },
    watch: {
        '$route.path'(newPath) {
            this.currentPath = newPath;
        }
    }
});
</script>

<style scoped>
@import '@/assets/main.css';

.nav-list {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
}

.nav-item:hover {
    border-bottom: 1px solid var(--color-blue);
}

.nav-link {
    text-decoration: none;
    color: var(--color-black);
    font-size: 16px;
    font-weight: 400;
    gap: 16px 0;
    font-weight: 400;
}

.active {
    border-bottom: 2px solid var(--color-orange);
}

.active a {
    color: var(--color-blue);
    font-weight: 700;
}
</style>