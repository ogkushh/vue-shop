<template>
    <div class="view-collection__btn" :style="{backgroundColor: back}">
        <router-link to="/catalog" class="view-collection__btn-link" id="btn-link" :style="{color: color}"><slot></slot></router-link>
    </div>
</template>

<script setup>
const props = defineProps( {
    color: {
        type: String,
        default: '#2A254B'
    },
    back: {
        type: String,
        default: '#F9F9F9'
    },
})
</script>

<style lang="scss">
.view-collection__btn {
  width: 170px;
  text-align: center;
  padding: 16px 32px;
  background-color: var(--light-gray);

  @media screen and (max-width: 767px) {
    width: 100%;
  }
  &:hover {
    opacity: .8;
    cursor: pointer;
  }

  &-link {
    line-height: 150%;
    color: var(--dark-primary);
    text-decoration: none;
  }
}
</style>