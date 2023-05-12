<template>
    <div class="view-collection__btn">
        <a href="#" class="view-collection__btn-link">View collection</a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.view-collection__btn {
  display: inline-block;
  max-width: 170px;
  text-align: center;
  padding: 16px 32px;
  background-color: #F9F9F9;

  &-link {
    line-height: 150%;
    color: #2A254B;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>