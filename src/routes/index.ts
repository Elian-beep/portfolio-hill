import { createRouter,  createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeVue from '@/sections/Home.vue';
import AboutVue from '@/sections/About.vue';
import ProjectsVue from '@/sections/Projects.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;