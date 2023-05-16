<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-top">
                    <div class="footer-menu">
                        <div class="footer-menu-column">
                            <span class="footer-menu__title">Menu</span>
                            <router-link to="/" class="footer-menu__link">New arrivals</router-link>
                            <router-link to="/" class="footer-menu__link">Best sellers</router-link>
                            <router-link to="/" class="footer-menu__link">Recently viewed</router-link>
                            <router-link to="/" class="footer-menu__link">Popular this week</router-link>
                            <router-link to="/" class="footer-menu__link">All products</router-link>
                        </div>
                        <div class="footer-menu-column">
                            <span class="footer-menu__title">Categories</span>
                            <router-link to="/" class="footer-menu__link">Crockery</router-link>
                            <router-link to="/" class="footer-menu__link">Furniture</router-link>
                            <router-link to="/" class="footer-menu__link">Homeware</router-link>
                            <router-link to="/" class="footer-menu__link">Plant pots</router-link>
                            <router-link to="/" class="footer-menu__link">Chairs</router-link>
                            <router-link to="/" class="footer-menu__link">Crockery</router-link>
                        </div>
                        <div class="footer-menu-column">
                            <span class="footer-menu__title">Our company</span>
                            <router-link to="/" class="footer-menu__link">About us</router-link>
                            <router-link to="/" class="footer-menu__link">Vacancies</router-link>
                            <router-link to="/" class="footer-menu__link">Contact us</router-link>
                            <router-link to="/" class="footer-menu__link">Privacy</router-link>
                            <router-link to="/" class="footer-menu__link">Returns policy</router-link>
                        </div>
                    </div>
                    <div class="footer-form">
                        <span class="footer-form__title">Join our mailing list</span>
                        <InputMail btnColor="#2A254B" btnBack="#fff" width="485px"/>
                    </div>
                </div>
                <div class="footer-bottom">
                    <span class="footer-bottom_copyright">Copyright 2023 Avion LTD</span>
                    <div class="footer-bottom-socials">
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-In.svg" alt="In"></a>
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-facebook.svg" alt="In"></a>
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-inst.svg" alt="In"></a>
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-skype.svg" alt="In"></a>
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-twitter.svg" alt="In"></a>
                        <a href="#" class="footer-bottom-socials__link"><img src="/public/img/footer-pinterest.svg" alt="In"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>

import InputMail from "@/components/UI/InputMail.vue";
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--dark-primary);
  color: var(--white);
  padding: 58px 82px 25px 82px;

  &-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary);
    padding-bottom: 48px;
  }

  &-menu {
    display: flex;
    justify-content: space-around;

    &-column:nth-child(2) {
      margin: 0 133px 0 109px;
    }

    &__link {
      display: block;
      color: var(--white);
      text-decoration: none;
      font-size: 14px;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    &__title {
      font-family: var(--font-clash-display);
      display: block;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 12px;
    }
  }

  &-form {

    &__title {
      display: block;
      font-family: var(--font-clash-display);
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 16px;
    }
  }

  &-bottom {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__copyright {
      font-size: 14px;
      line-height: 19px;
    }

    &-socials {
      display: flex;
      align-items: center;

      &__link {
        margin-right: 24px;

        &:last-child {
          margin: 0;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}

</style>