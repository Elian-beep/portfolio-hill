import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/routes';
import { provideStore } from './store';

createApp(App)
    .use(routes)
    .provide('store', provideStore())
    .mount('#app')