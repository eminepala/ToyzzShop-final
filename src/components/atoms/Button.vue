<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  padding: 12px 28px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
}
</style>
