<template>
  <div class="price-info-card" :class="type">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'yellow' // yellow, green, etc.
  }
})
</script>

<style scoped>
.price-info-card {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}

.yellow {
  background: #fff9db; /* Light yellow background */
  color: #5f5f5f;
  border: 1px solid #ffe100;
}
</style>
