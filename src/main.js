import '@/assets/main.css';
import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import globalComponents from './plugins/global-components';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(globalComponents);

app.mount('#app');
