<template>
    <div class="view-collection__btn">
        <a href="#" class="view-collection__btn-link" id="btn-link" :style="{color: color}">View collection</a>
    </div>
</template>

<script setup>
const props = defineProps( {
    color: {
        type: String,
        default: '#2A254B'
    }
})
</script>

<style lang="scss">
.view-collection__btn {
  display: inline-block;
  max-width: 170px;
  text-align: center;
  padding: 16px 32px;
  background-color: var(--light-gray);
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