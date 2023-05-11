<template>
  <header class="header">
      <div class="header-top">
        <div class="header-top-search">
            <img src="../../../public/header-search.svg" alt="Search">
        </div>
          <a href="#" class="header-logo">Avion</a>
          <div class="header-top-right">
              <div class="header-cart">
                  <a href="#">
                      <img class="header-cart-img" src="../../../public/header-cart.svg" alt="User">
                  </a>
              </div>
              <div class="header-user">
                  <a href="#">
                      <img class="header-user-img" src="../../../public/header-person.svg" alt="User">
                  </a>
              </div>
          </div>
      </div>
      <div class="header-menu">
          <a :href="element.path" v-for="(element, i) in menu" :key="i" class="header-menu__link">{{element.name}}</a>
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
</script>

<style lang="scss" scoped>
  .header {
    min-height: 132px;
    background-color: #fff;

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
    }
    &-cart {
      margin-right: 16px;
    }
    &-logo {
      color: #22202E;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-decoration: none;
      font-family: 'Clash Display', sans-serif;
      text-align: center;
      &:hover {
        text-decoration: underline;
      }
    }
    &-menu {
      height: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      &__link {
        margin-right: 44px;
        font-weight: 400;
        line-height: 22px;
        color: #726E8D;
        text-decoration: none;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>