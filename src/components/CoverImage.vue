<template>
    <div class="cover">
        <div class="cover-info">
            <div class="cover-info__texts">
                <h2 class="cover-info__title">Luxury homeware for people who love timeless design quality</h2>
                <span class="hero-info__description">Shop the new Spring 2022 collection today</span>
            </div>
            <a href="#" class="cover-info__link">View collection</a>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cover {
  background-image: url('../assets/cover-img.jpg');
  height: 704px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  margin-bottom: 80px;

  &-info {
    background-color: #fff;
    max-width: 630px;
    padding: 50px 55px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__title {
      font-family: 'Clash Display', sans-serif;
      font-size: 32px;
      line-height: 140%;
      font-weight: 400;
      color: #22202E;
      margin-bottom: 20px;
    }

    &__description {
      font-size: 18px;
      line-height: 150%;
      color: #5B5676;
    }

    &__link {
      line-height: 150%;
      color: #2A254B;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

</style>