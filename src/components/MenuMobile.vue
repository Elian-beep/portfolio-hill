<template>
    <div class="menu-mobile">
        <div class="mobile-menu-icon">
            <button @click="onHandleMenu">
                <img class="icon" :src="menuIconSwitch" alt="">
            </button>

        </div>
        <div class="nav-list" :class="{ open: open }">
            <ul>
                <li :class="{ 'active': store.state.sectionName == 'home' }" class="nav-item"><a @click="selectLink('home')" class="nav-link">Home</a></li>
                <li :class="{ 'active': store.state.sectionName == 'about' }" class="nav-item"><a @click="selectLink('about')" class="nav-link">Sobre</a></li>
                <li :class="{ 'active': store.state.sectionName == 'skills' }" class="nav-item"><a @click="selectLink('skills')" class="nav-link">Habilidades</a></li>
                <li :class="{ 'active': store.state.sectionName == 'projects' }" class="nav-item"><a @click="selectLink('projects')" class="nav-link">Projetos</a></li>
                <li :class="{ 'active': store.state.sectionName == 'articles' }" class="nav-item"><a @click="selectLink('articles')" class="nav-link">Artigos</a></li>
                <li :class="{ 'active': store.state.sectionName == 'contact' }" class="nav-item"><a @click="selectLink('contact')" class="nav-link">Contato</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';

import menuIcon from "@/assets/icons/icon-button-menu.svg";
import menuIconFocus from "@/assets/icons/icon-button-menu-focus.svg";

export default defineComponent({
    name: 'MenuMobile',
    data() {
        return {
            open: false,
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
            this.changeSectionName(path);
            this.changeOnAlertSwitch();
            this.onHandleMenu();
        },
    },
    watch: {
    },
    setup() {
        const store = inject<any>('store');
        const changeSectionName = (name: string) => {
            store.setSectionName(name);
        }
        const changeOnAlertSwitch = () => {
            store.state.onAlertSwitch ? store.setOnAlertSwitch(false) : store.setOnAlertSwitch(true);
        }

        return {
            changeSectionName,
            changeOnAlertSwitch,
            store
        }
        
    },
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