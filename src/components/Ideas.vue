<template>
    <div class="ideas">
        <div class="ideas-wrapper">
            <div class="ideas-info">
                <div class="ideas-info__texts">
                    <h2 class="ideas-info__title">It started with a small idea</h2>
                    <span class="ideas-info__description">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</span>
                </div>
                <ViewCollectionBtn color="#fff"/>
            </div>
            <div class="ideas-img">
                <img  class="ideas-image" src="/public/img/ideas-room.png" alt="Room">
            </div>
        </div>
    </div>
</template>

<script setup>
import ViewCollectionBtn from "./UI/ViewCollectionBtn.vue";
</script>

<style lang="scss" scoped>
.ideas {
  margin-bottom: 60px;

  @media screen and (max-width: 1024px){
    .ideas-info__description {
      display: block;
      margin-bottom: 56px;
    }
  }

  &-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
  }

  &-info {
    background-color: var(--dark-primary);
    padding: 50px 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &__title {
      font-family: var(--font-clash-display);
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      color: var(--white);
      margin-bottom: 20px;
    }

    &__description {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--white);
    }
  }
}

.view-collection__btn {
  background-color: rgba(249, 249, 249, 0.15);
}

.ideas-image {
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 767px){
  .ideas {

    &-wrapper {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 24px;
    }

    &-info {
      padding: 36px 32px 30px;
      &__title {
        font-size: 20px;
        line-height: 140%;
      }

      &__description {
        font-size: 14px;
        line-height: 150%;
      }
    }
  }
}
</style>