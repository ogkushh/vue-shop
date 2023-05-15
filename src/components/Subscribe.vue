<template>
    <div class="subscribe">
        <div class="subscribe-content">
            <h3 class="subscribe-title">Join the club and get the benefits</h3>
            <p class="subscribe-description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        </div>
        <div class="subscribe-checks">
            <div class="subscribe-check">
                <img src="/public/img/subscribe-check.svg" alt="Checkbox" class="subscribe-check__icon">
                <span class="subscribe-check__name">Exclusive offers</span>
            </div>
            <div class="subscribe-check">
                <img src="/public/img/subscribe-check.svg" alt="Checkbox" class="subscribe-check__icon">
                <span class="subscribe-check__name">Free events</span>
            </div>
            <div class="subscribe-check">
                <img src="/public/img/subscribe-check.svg" alt="Checkbox" class="subscribe-check__icon">
                <span class="subscribe-check__name">Large discounts</span>
            </div>
        </div>
        <InputMail/>
    </div>
</template>

<script setup>
import InputMail from "@/components/UI/InputMail.vue";
</script>

<style lang="scss" scoped>
.subscribe {
  background-image: url(public/img/subscribe.png);
  background-size: cover;
  padding: 97px 0 86px 0;

  &-content {
    max-width: 500px;
    text-align: center;
    margin: 0 auto 30px;
  }

  &-title {
    display: block;
    font-weight: 400;
    font-size: 32px;
    line-height: 140%;
    color: var(--white);
    margin-bottom: 12px;
    font-family: var(--font-clash-display);
  }

  &-description {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--white);
  }

  &-checks {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  &-check {
    display: flex;
    align-items: center;

    &:nth-child(2) {
      margin: 0 36px;
    }

    &__icon {
      margin-right: 8px;
    }

    &__name {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      text-align: center;
      color: var(--white);
    }
  }
}

</style>