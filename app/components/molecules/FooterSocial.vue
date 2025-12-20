<template>
  <div class="social-wrapper">
    <AtomIcon name="ri-instagram-line" class="icon" />
    <AtomIcon name="ri-facebook-line" class="icon" />
    <AtomIcon name="ri-twitter-line" class="icon" />
  </div>
</template>

<script setup>
import AtomIcon from "~/components/atoms/Icon.vue";
</script>

<style scoped>
.social-wrapper {
  display: flex;
  gap: 14px;
}

.icon {
  font-size: 26px;
  cursor: pointer;
  color: #444;
}

.icon:hover {
  color: #000;
}
</style>
