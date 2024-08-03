import {createRouter, createWebHistory} from 'vue-router';
import Comparar from "@/pages/Comparar.vue";

const routes = [
    {
        path: '/',
        name: 'Comparar',
        component: Comparar
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
