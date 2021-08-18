import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('./components/Inicio')
        }, 
        {
            path: '/inicio',
            redirect: '/'
        }, 
        {
            path: '',
            redirect: '/'
        },
        {
            path: '/busqueda',
            name: 'busqueda',
            component: () => import('./components/BusquedaJuegos')
        }, 
        {
            path: '/ventas',
            name: 'ventas',
            component: () => import('./components/Ventas')
        },
        {
            path: '/total',
            name: 'total',
            component: () => import('./components/Total')
        },
        {
            path: "*",
            component: () => import('./components/NotFound')
        },
    ]
})