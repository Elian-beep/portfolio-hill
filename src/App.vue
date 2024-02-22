<script lang="ts">
import { defineComponent, inject } from 'vue';

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
    data() {
        return {
        }
    },
    methods: {
        scrollToSection() {
            const section = this.$refs[this.store.state.sectionName] as HTMLElement;
            section.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        },
        checkActiveSection() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const refHome = this.$refs.home as HTMLElement;
            const refAbout = this.$refs.about as HTMLElement;
            const refProjects = this.$refs.projects as HTMLElement;
            const refArticles = this.$refs.articles as HTMLElement;
            const refContact = this.$refs.contact as HTMLElement;

            if (scrollPosition < refHome.offsetTop + windowHeight / 3) {
                this.changeSectionName('home');
            } else if (scrollPosition < refAbout.offsetTop + windowHeight / 3.5) {
                this.changeSectionName('about');
            } else if (scrollPosition < refProjects.offsetTop + windowHeight / 2.5) {
                this.changeSectionName('projects');
            } else if (scrollPosition < refArticles.offsetTop + windowHeight / 3) {
                this.changeSectionName('articles');
            } else if (scrollPosition < refContact.offsetTop + windowHeight / 2){
                this.changeSectionName('contact');
            }
        }
    },
    watch: {
        'store.state.onAlertSwitch'() {
            this.scrollToSection();
            console.log('nome da seção mudou');
        }
    },
    setup() {
        const store = inject<any>('store');
        const changeSectionName = (name: string) => {
            store.setSectionName(name);
        }

        return {
            changeSectionName,
            store
        }

    },
    mounted() {
        window.addEventListener('scroll', this.checkActiveSection);
        this.checkActiveSection(); // Check active section on initial render
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.checkActiveSection);
    }
});
</script>

<template>
    <Navbar />
    <main class="general-container">
        <ContainerPage ref="sections">
            <section ref="home" class="home-container">
                <Home />
            </section>
            <section ref="about" class="content-about">
                <About />
            </section>
            <section ref="projects" class="projects-content">
                <Projects />
            </section>
            <section ref="articles" class="articles-container">
                <Articles />
            </section>
            <section ref="contact" class="contact-container">
                <Contact />
            </section>
        </ContainerPage>
        <FooterDefault />
    </main>
</template>

<style>
@import '@/assets/main.css';

.general-container {
    padding: 32px 32px 0 32px;
}

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.content-about {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.projects-content {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.articles-container {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.contact-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

@media screen and (min-width: 796px) {
    .general-container {
        padding: 0;
        max-width: 1128px;
        margin: 0 auto
    }

    .home-container {
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 100%;
        margin-top: 160px;
    }
}
</style>