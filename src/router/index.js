
import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "@/pages/home/PageHome.vue";

const routes = [
    {
        path: '/',
        component: PageHome
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router