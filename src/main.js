import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWarning,faTrash,faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWarning,faTrash,faPencil);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon',FontAwesomeIcon);
app.mount('#app');