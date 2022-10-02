import {createRouter, createWebHistory} from 'vue-router';
import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import Locale from "@/views/Locale";
import Documents from "@/views/Documents";
import About from "@/views/About";
import LocaleSet from "@/views/LocaleSet";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/locale',
        name: 'locale',
        component: Locale
    },
    {
        path: '/docs/Conventional_Commits',
        name: 'documents',
        component: Documents
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/404',
        name: 'notFound',
        component: NotFound
    }
];

const functionList = [
    {
        path: '/locale/set',
        name: 'locale-set',
        component: LocaleSet,
    }
];

const guardList = [
    {
        path: '/:catchAll(.*)',
        beforeEnter: (to, from, next) => {
            next({name: 'notFound'});
        }
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [...routes, ...functionList, ...guardList]
})

export default router
