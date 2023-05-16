<template>
    <div>
        <CoverImage/>
        <div class="container">
            <AboutBrand/>
            <Products/>
            <Ideas/>
        </div>
        <Subscribe/>
    </div>
</template>

<script setup>
import CoverImage from "@/components/CoverImage.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Products from "@/components/ProductsIndex.vue";
import Ideas from "@/components/Ideas.vue";
import Subscribe from "@/components/Subscribe.vue";
</script>