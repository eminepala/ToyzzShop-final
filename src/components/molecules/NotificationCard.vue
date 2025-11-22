<template>
  <div class="notif-card">

    <img :src="img" alt="campaign" class="notif-img" />

    <div class="notif-content">
      <p class="notif-title">{{ title }}</p>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  img: { type: String, required: true },
  title: { type: String, required: true }
});
</script>

<style scoped>
.notif-card {
  display: flex;
  align-items: center;
  background: white;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #eee;
  gap: 12px;
  margin-bottom: 10px;
}

.notif-img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  object-fit: cover;
}

.notif-title {
  font-size: 15px;
  color: #333;
  font-weight: 500;
  line-height: 1.3;
}
</style>
