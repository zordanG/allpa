import HomePage from './components/HomePage.vue';
import ProjetosPage from './components/ProjetosPage.vue';
import ContatoPage from './components/ContatoPage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        name: "HomePage",
        component: HomePage,
        path: '/',
    },
    {
        name: "ProjetosPage",
        component: ProjetosPage,
        path: '/projects',
    },
    {
        name: "ContactPage",
        component: ContatoPage,
        path: '/contact',
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;