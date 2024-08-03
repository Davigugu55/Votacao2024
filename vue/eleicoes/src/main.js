import './assets/main.css'

import {createApp} from 'vue'
import router from './router';
import Comparar from "@/pages/Comparar.vue";

const app = createApp(Comparar);

app.use(router);

app.mount('#app');