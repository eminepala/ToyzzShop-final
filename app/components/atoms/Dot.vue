<template>
  <span
    class="dot"
    :class="{ active }"
    @click="$emit('click')"
  ></span>
</template>

<script setup>
defineProps({
  active: Boolean
})
</script>

<style scoped>
.dot {
  width: 10px;
  height: 10px;
  background-color: #c7c7c7;
  border-radius: 50%;
  cursor: pointer;
}
.dot.active {
  background-color: #333;
}
</style>
