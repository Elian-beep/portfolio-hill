<template>
    <ul class="nav-list">
        <li :class="{ 'active': store.state.sectionName == 'home' }" class="nav-item">
            <a @click="selectLink('home')" class="nav-link">Home</a>
        </li>
        <li :class="{ 'active': store.state.sectionName == 'about' }" class="nav-item">
            <a @click="selectLink('about')" class="nav-link">Sobre</a>
        </li>
        <li :class="{ 'active': store.state.sectionName == 'skills' }" class="nav-item">
            <a @click="selectLink('skills')" class="nav-link">Habilidades</a>
        </li>
        <li :class="{ 'active': store.state.sectionName == 'projects' }" class="nav-item">
            <a @click="selectLink('projects')" class="nav-link">Projetos</a>
        </li>
        <li :class="{ active: store.state.sectionName == 'articles' }" class="nav-item">
            <a @click="selectLink('articles')" class="nav-link">Artigos</a>
        </li>
        <li :class="{ active: store.state.sectionName == 'contact' }" class="nav-item">
            <a @click="selectLink('contact')" class="nav-link">Contato</a>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
    name: 'MenuLaptop',
    data() {
        return {
        }
    },
    methods: {
        selectLink(path: string) {
            this.changeSectionName(path);
            this.changeOnAlertSwitch();
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

.nav-list {
    display: flex;
    align-items: center;
    gap: 32px;
    list-style: none;
}

.nav-item:hover {
    border-bottom: 1px solid var(--color-blue);
    cursor: pointer;
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
    font-size: 16px;
}
</style>