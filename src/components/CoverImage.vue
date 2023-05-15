<template>
    <div class="cover">
        <div class="cover-info">
            <div class="cover-info__texts">
                <h2 class="cover-info__title">Luxury homeware for people who love timeless design quality</h2>
                <span class="hero-info__description">Shop the new Spring 2022 collection today</span>
            </div>
            <ViewCollectionBtn/>
        </div>
    </div>
</template>

<script setup>
import ViewCollectionBtn from "./UI/ViewCollectionBtn.vue";
</script>

<style lang="scss" scoped>
.cover {
  background-image: url('/public/img/room-main.png');
  height: 704px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  margin-bottom: 80px;

  &-info {
    background-color: var(--white);
    max-width: 630px;
    padding: 50px 55px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
      font-family: var(--font-clash-display);
      font-size: 32px;
      max-width: 513px;
      line-height: 140%;
      font-weight: 400;
      color: var(--black-title);
      margin-bottom: 20px;
    }

    &__description {
      font-size: 18px;
      line-height: 150%;
      color: #5B5676;
    }
  }
}

</style>