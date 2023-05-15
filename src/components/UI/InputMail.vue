<template>
    <form class="subscribe-form">
        <div class="input-group">
            <input type="email" class="input" id="Email" name="Email" placeholder="your@email.com">
            <input class="button--submit" value="Sign up" type="submit">
        </div>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.input {
  width: 385px;
  min-height: 56px;
  padding: 0 1rem;
  color: #fff;
  font-size: 15px;
  border: 1px solid var(--dark-primary);
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

.input:focus, .input:focus-visible {
  border-color: var(--primary);
  outline: none;
}
</style>