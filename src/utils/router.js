//Dependencies
import {createRouter, createWebHistory} from 'vue-router'

//Routes
const routes = [
    {
        name: '/',
        path: '/',
        component: () => import ("../views/StartView.vue")
    },
    {
        name: 'questions',
        path: '/questions',
        component: () => import ("../views/QuestionsView.vue")
    },
    {
        name: 'result',
        path: '/result',
        component: () => import ("../views/ResultView.vue")
    }
]

//Exports
export default createRouter({
    history: createWebHistory(), 
    routes
})
