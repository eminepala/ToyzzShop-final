<template>
  <!-- Remix Icon -->
  <span 
    v-if="isRemix" 
    class="icon" 
    :class="name"
  ></span>

  <!-- PNG / JPG / WEBP / SVG -->
  <img
    v-else
    :src="name"
    class="icon-img"
    alt="icon"
  />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, required: true }
});

// Remix icon mu?
const isRemix = computed(() => props.name.startsWith("ri-"));
</script>

<style>
.icon {
  font-size: 20px;
}

.icon-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}
</style>
