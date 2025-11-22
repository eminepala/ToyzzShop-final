<template>
  <img :src="src" class="slide-img" />
</template>

<script setup>
defineProps({
  src: String
})
</script>

<style scoped>
.slide-img {
  width: 100%;
  border-radius: 14px;
}
</style>
