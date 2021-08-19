import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import('./views/Inicio')
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
            component: () => import('./views/BusquedaJuegos')
        }, 
        {
            path: '/ventas',
            name: 'ventas',
            component: () => import('./views/Ventas')
        },
        {
            path: '/total',
            name: 'total',
            component: () => import('./views/Total')
        },
        {
            path: "*",
            component: () => import('./views/NotFound')
        },
    ]
})