//Dependencies
import {createRouter, createWebHistory} from 'vue-router'
import Start from "../views/Start.vue"

//Routes
const routes = [
    {
        name: 'start',
        path: '/',
        component: () => import ("../views/Start.vue")
    },
    {
        name: 'questions',
        path: '/questions',
        component: () => import ("../views/Questions.vue")
    },
    {
        name: 'result',
        path: '/result',
        component: () => import ("../views/Result.vue")
    }
]

//Exports
export default createRouter({
    history: createWebHistory(), 
    routes
})
