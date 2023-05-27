<template>
    <form class="subscribe-form">
        <div class="input-group">
            <input type="email" class="input" id="Email" name="Email" placeholder="your@email.com" :style="{width: width}">
            <input class="button--submit" value="Sign up" type="submit" :style="{background: btnBack, color: btnColor}">
        </div>
    </form>
</template>

<script setup>
const props = defineProps({
    btnColor: {
        type: String,
        default: '#fff',
    },
    btnBack: {
        type: String,
        default: '#2A254B'
    },
    width: {
        type: String,
        default:'100%'
    }
})
</script>

<style lang="scss" scoped>

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  max-width: 385px;
  width: 100%;
  min-height: 56px;
  padding: 0 1rem;
  color: var(--white);
  font-size: 15px;
  border: 1px solid;
  border-radius: 6px 0 0 6px;
  background-color: transparent;
}

.button--submit {
  min-height: 56px;
  padding: 16px 32px;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: var(--dark-primary);
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transition: background-color .3s ease-in-out;
}

.button--submit:hover {
  opacity: .9;
}

::placeholder {
  color: silver;
}

.input:focus, .input:focus-visible {
  border-color: var(--primary);
  outline: none;
}

@media screen and (max-width: 767px){
  .input {
    width: 100%;
  }
}
</style>