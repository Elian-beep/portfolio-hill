<template>
    <main class="general-container">
        <div>
            <Navbar />
            <!-- <router-view></router-view> -->
            <ContainerPage>
                <Home />
                <About />
                <Projects />
                <Articles />
                <Contact />
            </ContainerPage>
            <FooterDefault />
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/Navbar.vue';
import FooterDefault from './components/FooterDefault.vue';

import ContainerPage from './components/ContainerPage.vue';
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Projects from './sections/Projects.vue';
import Articles from './sections/Articles.vue';
import Contact from './sections/Contact.vue';

export default defineComponent({
    name: '',
    components: { Navbar, FooterDefault, ContainerPage, Home, About, Projects, Articles, Contact },
});
</script>

<style scoped>
@import '@/assets/main.css';
.general-container div {
    padding: 32px 32px 0 32px;
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