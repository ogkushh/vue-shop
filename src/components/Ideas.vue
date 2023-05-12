<template>
    <div class="ideas">
        <div class="ideas-wrapper">
            <div class="ideas-info">
                <div class="ideas-info__texts">
                    <h2 class="ideas-info__title">It started with a small idea</h2>
                    <span class="ideas-info__description">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</span>
                </div>
                <ViewCollectionBtn/>
            </div>
            <div class="ideas-img">
                <img src="../../public/img/ideas-room.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import ViewCollectionBtn from "./LayOut/ViewCollectionBtn.vue";
</script>

<style lang="scss" scoped>
.ideas {
  margin-bottom: 60px;
  &-wrapper {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
  }
  &-info {
    background-color: #2A254B;
    padding: 50px 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 478px;
    &__title {
      font-family: 'Clash Display', sans-serif;
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      color: #FFFFFF;
      margin-bottom: 20px;
    }

    &__description {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #FFFFFF;
    }
  }
}
</style>