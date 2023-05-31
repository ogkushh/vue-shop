<template>
    <div>
        <HeaderText/>
        <div class="container">
            <ProductsIndex/>
        </div>
    </div>
</template>

<script setup>

import HeaderText from "@/components/Catalog/Catalog.vue";
import ProductsIndex from "@/components/ProductsIndex.vue";
</script>

<style lang="scss" scoped>
@import "src/assets/styles/global";
</style>