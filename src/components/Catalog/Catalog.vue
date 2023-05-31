<template>
    <div class="catalog-cover">
        <div class="container">
            <div class="cover">
                <h2 class="cover-title">View all products</h2>
                <form class="cover-nav" action="#">
                    <div class="cover-nav-left">
                        <select class="cover-select" name="category">
                            <option class="cover-select-title" value="tables" selected>Category</option>
                            <option class="cover-select-title" value="tables">Tables</option>
                            <option class="cover-select-title" value="chairs">Chairs</option>
                            <option class="cover-select-title" value="vases">Vases</option>
                        </select>
                        <select class="cover-select" name=product-type>
                            <option class="cover-select-title" value="tables" selected>Product type</option>
                            <option class="cover-select-title" value="tables">Tables</option>
                            <option class="cover-select-title" value="chairs">Chairs</option>
                            <option class="cover-select-title" value="vases">Vases</option>
                        </select>
                        <select class="cover-select" name="price">
                            <option class="cover-select-title" value="tables" selected>Price</option>
                            <option class="cover-select-title" value="tables">Tables</option>
                            <option class="cover-select-title" value="chairs">Chairs</option>
                            <option class="cover-select-title" value="vases">Vases</option>
                        </select>
                        <select class="cover-select" name="brand">
                            <option class="cover-select-title" value="tables" selected>Brand</option>
                            <option class="cover-select-title" value="tables">Tables</option>
                            <option class="cover-select-title" value="chairs">Chairs</option>
                            <option class="cover-select-title" value="vases">Vases</option>
                        </select>
                    </div>
                    <div class="cover-nav-right">
                        <p class="cover-nav-right-sorted_by">Sorting by:</p>
                        <select class="cover-select last" name="brand">
                            <option class="cover-select-title" value="tables" selected>Brand</option>
                            <option class="cover-select-title" value="tables">Tables</option>
                            <option class="cover-select-title" value="chairs">Chairs</option>
                            <option class="cover-select-title" value="vases">Vases</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.cover {

  &-title {
    display: flex;
    justify-content: center;
    font-family: var(--font-clash-display);
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;
    padding: 40px 0 24px 0;
  }

  &-nav {
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    margin-bottom: 40px;

    &-right {
      display: flex;
      align-items: center;

      &-sorted_by {
        margin-right: 20px;
      }
    }

    &-left {
      display: flex;
      align-items: center;
    }
  }

  &-select {
    //border: none;
    //margin-right: 40px;


    //width: 100%; /* от ширины блока div */
    padding: .75rem .5rem .75rem 1rem;/* отступы от текста до рамки */
    background: transparent; /* убираем фон */
    border: none; /* рамка */
    border-radius: 3px;/* скругление полей формы */
    //-webkit-appearance: none;/* Chrome */
    //-moz-appearance: none;/* Firefox */
    //appearance: none;/* убираем дефолнтные стрелочки */
    font-family: inherit;/* наследует от родителя */
    font-size: 1rem;
    cursor: pointer;

    &-title {
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      padding: 12px 24px;
    }
  }
  }

@media screen and (max-width: 767px) {
  .cover-nav {
    display: flex;
    flex-direction: column;
  }

  .cover-select {
    margin-bottom: 20px;
  }

  .last {
    margin: 0;
  }
}
</style>