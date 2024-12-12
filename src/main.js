import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

library.add(faCalculator);

library.add(faUser, faCoffee);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
