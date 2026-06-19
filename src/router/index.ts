import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        name: "homepage",
        path: "/",
        component: () => import("../views/HomePage.vue")
    },
    {
        name: "aboutpage",
        path: "/about",
        component: () => import("../views/AboutPage.vue")
    },
    {
        name: "projectpage",
        path: "/projects",
        component: () => import("../views/ProjectPage.vue")
    },
    {
        name: "not-found",
        path: "/:pathMatch(.*)*",
        component: () => import("../views/PageNotFound.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
