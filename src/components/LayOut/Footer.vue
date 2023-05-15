<template>
    <footer class="footer">
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
              <InputMail/>
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
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
  }

  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

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

      //&__title {
      //  font-weight: 400;
      //  font-size: 16px;
      //  line-height: 20px;
      //}
    }
  }

}
</style>