<template>
    <Header/>
  <div class="container">
      <CoverImage/>
      <AboutBrand/>
      <Products/>
      <Ideas/>
  </div>
</template>

<script setup>
import Header from "./components/LayOut/Header.vue";
import CoverImage from "./components/CoverImage.vue";
import AboutBrand from "./components/AboutBrand.vue";
import Products from "./components/ProductsIndex.vue";
import Ideas from "./components/Ideas.vue";
</script>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/satoshi');
@import url('https://fonts.cdnfonts.com/css/clash-display');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  font-weight: 400;
  //font-family: 'Clash Display', sans-serif;

}

img {
  max-width: 100%;
}

  .container {
      max-width: 1280px;
      margin: 0 auto;
  }
</style>