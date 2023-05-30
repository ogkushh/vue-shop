<template>
    <div class="product">
        <router-link :to="`products/${id}`">
            <img class="product-img" :src="img" :alt="title" :key="id">
        </router-link>
        <router-link class="product-name" :to="`products/${id}`">{{ title }}</router-link>
        <span class="product-price">£{{ price }}</span>
    </div>
</template>

<script setup>


const props = defineProps({
    id: {
        type: Number,
        required: true,
    },
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
  margin-bottom: 13px;

  @media screen and (max-width: 1024px) {
    .product-img {
      margin: 0 auto 24px;
    }
  }
  &-img {
    display: block;
    margin-bottom: 24px;
  }

  &-name {
    display: block;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    font-family: var(--font-clash-display);
    color: var(--dark-primary);
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
    color: var(--dark-primary);
  }
}
</style>