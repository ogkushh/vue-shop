<template>
        <div class="container">
            <CoverImage/>
            <AboutBrand/>
            <Products/>
            <Ideas/>
        </div>
    <Subscribe/>

</template>

<script setup>
import CoverImage from "@/components/CoverImage.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Products from "@/components/ProductsIndex.vue";
import Ideas from "@/components/Ideas.vue";
import Subscribe from "@/components/Subscribe.vue";
</script>