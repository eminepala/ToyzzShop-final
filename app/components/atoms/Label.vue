<template>
  <label class="label">
    <slot>{{ text }}</slot>
  </label>
</template>

<script setup>
defineProps({
  text: String
})
</script>

<style>
.label {
  font-size: 15px;
  color: #777;            /* ToyzzShop gri tonu */
  font-weight: 400;       /* Çok ince değil, çok kalın değil */
  margin-bottom: 6px;
  display: block;
}
</style>
