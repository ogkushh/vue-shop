<template>
  <div class="container">
      <Header/>
      <CoverImage/>
      <AboutBrand/>
  </div>
</template>

<script setup>

import Header from "./components/LayOut/Header.vue";
import CoverImage from "./components/CoverImage.vue";
import AboutBrand from "./components/AboutBrand.vue";
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
      max-width: 1140px;
      margin: 0 auto;
  }
</style>