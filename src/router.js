import {createRouter, createWebHistory} from "vue-router";
import Index from "@/Views/Index.vue";
import Product from "@/Views/ProductPage.vue";
import Catalog from "@/Views/CatalogPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'Index',
        component: Index

        },
        {
           path: '/products/:id',
            name: 'Product',
            component: Product
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: Catalog,
        },
    ]
})

export default router
