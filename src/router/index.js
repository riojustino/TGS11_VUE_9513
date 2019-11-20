import Vue from 'vue'
import Router from 'vue-router'

const DashboardLayout = () => import(/*webpackChunkName:"dashboard"*/ '../components/dashboardLayout.vue')

const Login = () => import ('../components/Login.vue')

function loadView(view){
    return () => import(/*webpackChunkName:"view-[request]"*/ `../components/dashboardContents/${view}.vue`)
}

const routes = [
    {
        path: '/DashboardLayout',
        component: DashboardLayout,
        children: [
            {
                name: 'UserController',
                path: '',
                component: loadView('userController')
            },
        ]
    },
    {
        path: '/DashboardLayout',
        component: DashboardLayout,
        children: [
            {
                name: 'ServicesController',
                path: '',
                component: loadView('servicesController')
            },
        ]
    },
    {
        name: 'Login',
        path: '/',
        component: Login,
    },
]
Vue.use(Router)

const router = new Router({mode: 'history', routes: routes})

export default router