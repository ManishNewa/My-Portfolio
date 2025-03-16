import '@/assets/main.css';
import '@/assets/styles/main.scss';
import 'floating-vue/dist/style.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {
  // Directives
  vTooltip,
  vClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu,
} from 'floating-vue';

import App from './App.vue';
import router from './router';

import globalComponents from './plugins/global-components';

const app = createApp(App);

app.directive('tooltip', vTooltip);
app.directive('close-popper', vClosePopper);

app.component('VDropdown', Dropdown);
app.component('VTooltip', Tooltip);
app.component('VMenu', Menu);
app.use(createPinia());
app.use(router);

app.use(globalComponents);

app.mount('#app');
