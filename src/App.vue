<template>
    <div>
        <Header/>
            <router-view/>
        <Footer/>
    </div>
</template>


<script setup>
import Header from "@/components/LayOut/Header.vue";
import Footer from "@/components/LayOut/Footer.vue";
</script>

<style lang="scss">
@import "assets/styles/global";
</style>