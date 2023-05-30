<template>
    <header class="header">
        <div class="header-top">
            <div class="header-top-left">
                <div class="header-top-search">
                    <img class="header-top-search-icon" src="/img/header-search.svg" alt="Search">
                </div>
            </div>
            <router-link to="/" class="header-logo">Avion</router-link>
            <div class="header-top-right">
                <div class="header-cart">
                    <router-link to="/cart">
                        <img class="header-cart-img" src="../../../public/img/header-cart.svg" alt="Cart">
                    </router-link>
                </div>
                <div class="header-user">
                    <router-link to="/user">
                        <img class="header-user-img" src="../../../public/img/header-person.svg" alt="User">
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import {ref} from "vue";

const menu = [
    {
        name: 'Plant pots',
        path: '/plant',
    },
    {
        name: 'Ceramics',
        path: '/ceramics',
    },
    {
        name: 'Tables',
        path: '/tables',
    },
    {
        name: 'Chairs',
        path: '/chairs',
    },
    {
        name: 'Crockery',
        path: '/crockery',
    },
    {
        name: 'Tableware',
        path: '/tableware',
    },
    {
        name: 'Cutlery',
        path: '/cutlery',
    },
]

const isOpenedMobileMenu = ref(false)
</script>

<style lang="scss" scoped>
.header {
  min-height: 100px;
  background-color: var(--white);

  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    margin: 0 28px;

    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    &-mobile-menu {
      display: none;

      &-base {
        display: none;

        &-icon {
          margin-left: 20px;
          display: block;
        }
      }
    }
  }

  &-cart {
    margin-right: 16px;
  }

  &-logo {
    color: var(--black-title);
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-decoration: none;
    font-family: var(--font-clash-display);
    text-align: center;
  }
}

@media screen and (max-width: 767px) {
  .header {
    height: auto;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;
      border: none;
      height: auto;
      padding: 10px;

      &-mobile-menu {

        &-base {
          display: block;

          &:hover {
            cursor: pointer;
          }
        }
      }

      &-right {
        display: none;
      }

      &-left {
        order: 2;
        display: flex;
        align-items: center;

        &-search {

          &-icon {
            display: block;
          }
        }
      }
    }

    &-menu-mobile {
      position: fixed;
      background-color: #fff;
      top: 0;
      right: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10px 20px;

      &-top {
      }

      &-icon {
        display: block;
      }
    }

    &-menu__link {
      margin: 14px 0;
    }

    &-logo {
      order: 1;
    }
  }
}
</style>