import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSignOut, faUser, faCalculator, faInfoCircle, faPen, faUpload, faArrowLeft, faIdCard, faClock, faCoins, faHandshake, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faCalculator, faUser, faSignOut, faInfoCircle, faPen, faUpload, faArrowLeft, faIdCard, faClock, faCoins, faHandshake, faPhone, faEnvelope);

const app = createApp(App)

app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
