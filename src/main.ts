import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/routes';

const app = createApp(App);

createApp(App)
    .use(routes)
    .mount('#app')