<template>
    <div class="product">
        <a href="#">
            <img class="product-img" :src="img" :alt="title">
        </a>
        <a class="product-name" href="#">{{ title }}</a>
        <span class="product-price">£{{ price }}</span>
    </div>
</template>

<script setup>


const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
})
</script>

<style lang="scss" scoped>
.product {
  &-img {
    display: block;
    margin-bottom: 24px;
  }

  &-name {
    display: block;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    font-family: 'Clash Display', sans-serif;
    color: #2A254B;
    text-decoration: none;
    margin-bottom: 8px;

    &:hover {
      text-decoration: underline;
    }
  }

  &-price {
    display: block;
    font-size: 18px;
    line-height: 150%;
    color: #2A254B;
  }
}
</style>