import { createRouter,  createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeVue from '@/sections/Home.vue';
import AboutVue from '@/sections/About.vue';
import ProjectsVue from '@/sections/Projects.vue';
import ArticlesVue from '@/sections/Articles.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomeVue
    },
    {
        path: '/about',
        component: AboutVue
    },{
        path: '/projects',
        component: ProjectsVue
    },{
        path: '/articles',
        component: ArticlesVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;