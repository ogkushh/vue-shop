<template>
    <div class="intro">
        <div class="intro-wrapper">
            <div class="intro-right">
                <div class="intro-right-top">
                    <h2 class="intro-right-top-title">The furniture brand for the future, with timeless designs</h2>
                        <ViewCollectionBtn back="#494465" color="#fff">View collection</ViewCollectionBtn>
                </div>
                <p class="intro-right-top-description">A new era in eco friendly furniture with Avelon, the French
                    luxury retail brand
                    with nice fonts, tasteful colors and a beautiful way to display things digitally
                    using modern web technologies.</p>
            </div>
            <div class="intro-left">
                <img class="intro-left-img" src="/public/img/chair-cover-big.png" alt="Chair">
            </div>
        </div>
    </div>
</template>

<script setup>

import ViewCollectionBtn from "@/components/UI/ViewCollectionBtn.vue";
</script>

<style lang="scss" scoped>
.intro {
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 80px 60px;
  }

  &-right {
    background-color: var(--dark-primary);
    color: var(--white);
    padding: 60px 98px 60px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 584px;

    &-top {

      &-title {
        font-family: var(--font-clash-display);
        font-weight: 400;
        font-size: 32px;
        line-height: 140%;
        margin-bottom: 41px;
      }

      &-description {
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
      }
    }
  }

  &-left {

    &-img {
      width: 100%;
      height: 584px;
    }
  }
}

@media screen and (max-width: 767px) {
  .intro {
    margin-bottom: 48px;
    background-color: var(--dark-primary);

    &-wrapper {
      display: block;
      padding: 0;
    }

    &-right {
      padding: 40px 24px 24px;
      height: 502px;

      &-top {

        &-title {
          min-width: 342px;
          font-size: 32px;
        }

        &-description {
          padding-top: 25px;
          font-size: 18px;
        }
      }

      &-left {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .intro {
    background-color: var(--dark-primary);
    margin-bottom: 48px;

    &-wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }

    &-right {
      height: 502px;
    }

    &-left {
      display: none;
    }
  }
}
</style>