<template>
    <div class="menu-mobile">
        <div class="mobile-menu-icon">
            <button @click="onHandleMenu">
                <img class="icon" :src="menuIconSwitch" alt="">
            </button>

        </div>
        <div class="nav-list" :class="{ open: open }">
            <ul>
                <li :class="{ 'active': currentPath == '/' }" class="nav-item"><a @click="selectLink('/')" href="#" class="nav-link">Home</a></li>
                <li :class="{ 'active': currentPath == '/about' }" class="nav-item"><a @click="selectLink('/about')" href="#" class="nav-link">Sobre</a></li>
                <li :class="{ 'active': currentPath == '/projects' }" class="nav-item"><a @click="selectLink('/projects')" href="#" class="nav-link">Projetos</a></li>
                <li :class="{ 'active': currentPath == '/articles' }" class="nav-item"><a @click="selectLink('/articles')" href="#" class="nav-link">Artigos</a></li>
                <li class="nav-item"><a @click="downloadCV" href="#" class="nav-link">Currículo</a></li>
                <li :class="{ 'active': currentPath == '/contact' }" class="nav-item"><a @click="selectLink('/contact')" href="#" class="nav-link">Contato</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import menuIcon from "@/assets/icons/icon-button-menu.svg";
import menuIconFocus from "@/assets/icons/icon-button-menu-focus.svg";

export default defineComponent({
    name: 'MenuMobile',
    data() {
        return {
            open: false,
            currentPath: this.$route.path,
            menuIcon,
            menuIconFocus,
            menuIconSwitch: menuIcon
        }
    },
    methods: {
        onHandleMenu() {
            this.open = !this.open;
            this.menuIconSwitch = this.open ? menuIconFocus : menuIcon ;
        },
        selectLink(path: string){
            this.onHandleMenu();
            this.$router.push({path: path});
        },
        downloadCV() {
            window.open("https://docs.google.com/document/d/10bWGnK8tAy7Bzy1uXlVvVUZK5G7sWRkfU8MbLLbbqAg/edit", '_blank');
        },
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

.menu-mobile{
    position: relative;
}

.mobile-menu-icon button {
    background-color: transparent;
    border: none;
    transition: all .2s ease-in-out;
}

.nav-list {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    background: var(--color-gray-min);
    width: 85vw;
    margin-top: 24px;
    border-radius: 5px;

    position: absolute;
    top: 100%;
    right: 0;
}

.nav-list ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    text-align: center;
}

.nav-item {
    margin: 16px 0;
}

.nav-link {
    text-decoration: none;
    font-size: 16px;
    color: var(--color-black);
    font-weight: 400;
}

.open {
    display: block;
}
.active {
    padding: 0 40%;
}

.active a {
    border-bottom: 2px solid var(--color-orange);
    color: var(--color-blue);
    font-weight: 700;
}
</style>