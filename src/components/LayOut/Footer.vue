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
                        <InputMail btnColor="#2A254B" btnBack="#fff"/>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p class="footer-bottom_copyright">Copyright 2023 Avion LTD</p>
                    <div class="footer-bottom-socials">
                        <a href="https://ru.linkedin.com/" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-In.svg"
                                                                             alt="In"></a>
                        <a href="https://ru-ru.facebook.com/" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-facebook.svg"
                                                                             alt="In"></a>
                        <a href="https://www.instagram.com/" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-inst.svg" alt="In"></a>
                        <a href="https://www.skype.com/ru/" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-skype.svg"
                                                                             alt="In"></a>
                        <a href="https://twitter.com/?lang=ru" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-twitter.svg"
                                                                             alt="In"></a>
                        <a href="https://ru.pinterest.com/" class="footer-bottom-socials__link" target="_blank"><img src="/public/img/footer-pinterest.svg"
                                                                             alt="In"></a>
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
  padding-top: 58px;

  &-top {
    display: flex;
    flex-wrap: wrap;
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
    padding-bottom: 22px;
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

@media screen and (max-width: 1230px) {
  .footer-top {
    justify-content: center;
  }
  .footer-menu {
    margin-bottom: 48px;
  }
  .footer-form__title {
    text-align: center;
  }

}

@media screen and (max-width: 767px) {
  .footer{
    &-menu {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 40px;

      &-column:first-child {
        margin-bottom: 40px;
      }

      &-column:nth-child(2) {
        margin: 0 0 0 96px;
      }
    }

    &-top {
      padding-bottom: 16px;
    }

    &-form__title {
      text-align: start;
    }

    &-bottom {
      padding-top: 20px;
      display: flex;
      justify-content: center;

      &-socials {
        display: none;
      }

      &_copyright {
        margin-bottom: 20px;
      }
    }
  }
}

</style>