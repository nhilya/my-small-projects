import {createWebHistory, createRouter} from 'vue-router'
import MainHome from './components/MainHome.vue'
import MainService from './components/MainService.vue'
import MainProfile from './components/MainProfile.vue'
import PageNotFound from './components/PageNotFound.vue'

const routes = [
    {
        name: 'MainHome',
        path: '/',
        component: MainHome
    },
    {
        name: 'MainService',
        path: '/service',
        component: MainService
    },
    {
        name: 'MainProfile',
        path: '/profile',
        component: MainProfile
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
];

const router = createRouter ({
    history: createWebHistory(),
    routes
});
export default router;