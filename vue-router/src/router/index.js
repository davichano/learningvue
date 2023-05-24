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
router.beforeEach((to) => {
    // ✅ This will work because the router starts its navigation after
    // the router is installed and pinia will be installed too
    // if (to.meta.requiresAuth && !store.isLoggedIn) return '/login'
})

export default router