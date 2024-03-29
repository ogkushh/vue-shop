import {createRouter, createWebHistory} from "vue-router";
import Index from "@/Views/Index.vue";
import Product from "@/Views/ProductPage.vue";
import Catalog from "@/Views/CatalogPage.vue";
import CartPage from "@/Views/CartPage.vue";

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
        {
            path: '/cart',
            name: 'Cart',
            component: CartPage,
        },
    ]
})

export default router
