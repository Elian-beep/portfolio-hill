<template>
    <div class="menu-mobile">
        <div class="mobile-menu-icon">
            <button @click="onHandleMenu">
                <img class="icon" src="@/assets/icons/icon-button-menu.svg" alt="">
            </button>

        </div>
        <div class="nav-list" :class="{ open: open }">
            <ul>
                <li class="nav-item"><a @click="selectLink('/')" href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a @click="selectLink('/about')" href="#" class="nav-link">Sobre</a></li>
                <li class="nav-item"><a @click="selectLink('/projects')" href="#" class="nav-link">Projetos</a></li>
                <li class="nav-item"><a @click="selectLink('/articles')" href="#" class="nav-link">Artigos</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Currículo</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contato</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MenuMobile',
    data() {
        return {
            open: false
        }
    },
    methods: {
        onHandleMenu() {
            this.open = !this.open;
        },
        selectLink(path: string){
            this.onHandleMenu();
            this.$router.push({path: path});
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
}

.nav-list {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    background: var(--color-gray);
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
</style>