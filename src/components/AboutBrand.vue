<template>
    <div class="about-brand">
        <h2 class="about-brand__title">What makes our brand different</h2>
        <div class="about-brand__elements">
            <div class="about-brand__element" v-for="(element, i) of aboutBrands" :key="i">
                    <img class="about-brand__element-img" :src="element.img" :alt="element.title">
                    <span class="about-brand__element-title">{{ element.title }}</span>
                    <span class="about-brand__element-description">{{ element.description }}</span>
            </div>
        </div>
    </div>
    <img src="" alt="">
</template>

<script setup>
const aboutBrands = [
    {
        img: '/public/img/about-brand-car.svg',
        title: 'Next day as standard',
        description: 'Order before 3pm and get your order the next day as standard',
    },
    {
        img: '/public/img/about-brand-check-box.svg',
        title: 'Made by true artisans',
        description: 'Handmade crafted goods made with real passion and craftmanship',
    },
    {
        img: '/public/img/about-brand-pay.svg',
        title: 'Unbeatable prices',
        description: 'For our materials and quality you won’t find better prices anywhere',
    },
    {
        img: '/public/img//about-brand-flower.svg',
        title: 'Recycled packaging',
        description: 'We use 100% recycled to ensure our footprint is more manageable',
    },
]
</script>

<style lang="scss" scoped>
.about-brand {
  margin-bottom: 130px;

  &__title {
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    color: var(--dark-primary);
    margin-bottom: 36px;
  }

  &__elements {
    display: grid;
    grid-template-columns: repeat(4, 305px);
    column-gap: 10px;
    justify-content: space-between;
  }

  &__element {
    background-color: var(--light-gray);
    padding: 48px;
    &-contains{
    }
    &-img {
      display: block;
      margin: 0 18px 12px 0;
    }

    &-title {
      display: block;
      font-size: 20px;
      line-height: 140%;
      color: var(--dark-primary);
      margin-bottom: 12px;
    }

    &-description {
      line-height: 150%;
      color: var(--dark-primary);
    }
  }
}
</style>