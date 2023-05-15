<template>
    <div class="products-container">
        <div class="products">
            <Product v-for="product of products" :key="product.id" :img="product.img" :title="product.title"
                     :price="product.price"/>
        </div>
        <div class="btn-wrapper">
            <ViewCollectionBtn/>
        </div>
    </div>
</template>

<script setup>
import Product from "./Product.vue";
import {ref} from "vue";
import ViewCollectionBtn from "./UI/ViewCollectionBtn.vue";

const products = ref([
    {
        id: 1,
        img: '/public/img/products-chair.png',
        title: 'The Dandy chair',
        price: 250,
    },
    {
        id: 2,
        img: '/public/img/products-vases.png',
        title: 'Rustic Vase Set',
        price: 155,
    },
    {
        id: 3,
        img: '/public/img/products-vase.png',
        title: 'The Silky Vase',
        price: 125,
    },
    {
        id: 4,
        img: '/public/img/products-lamp.png',
        title: 'The Lucy Lamp',
        price: 399,
    },
])</script>

<style lang="scss" scoped>
.products-container {
  margin-bottom: 100px;
}
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 48px;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
}
</style>