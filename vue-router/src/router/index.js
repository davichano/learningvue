import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomeView,
            name: 'home'
        },
        {
            path: '/about',
            component: import('../views/AboutView.vue'),
            name: 'about'
        },
        {
            path: '/chats',
            component: import('../views/ChatView.vue'),
            name: 'chats'
        },
        {
            path: '/course/:course',
            component: import('../views/courses/CourseIndexView.vue'),
            name: 'course'
        }
    ]
})

export default router