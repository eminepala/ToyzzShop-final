<template>
  <div class="notification-card">
    <div class="img-wrapper">
      <img :src="img" :alt="title" />
    </div>
    <div class="info">
      <h4 class="title">{{ title }}</h4>
      <span class="detail-link">Detaylı Bilgi ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
}>();
</script>

<style scoped>
.notification-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.notification-card:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.img-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  overflow: hidden;
  flex-shrink: 0;
}

.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.title {
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: #333;
  line-height: 1.3;
}

.detail-link {
  font-size: 12px;
  color: #ff9d00;
  font-weight: 500;
}
</style>
