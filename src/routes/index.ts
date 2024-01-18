import { createRouter,  createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeVue from '@/sections/Home.vue';
import AboutVue from '@/sections/About.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomeVue
    },
    {
        path: '/about',
        component: AboutVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;