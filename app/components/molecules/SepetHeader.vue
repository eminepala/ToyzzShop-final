<template>
  <div>
    <div class="sepet-header">

      <!-- Sol: Alışverişe Devam Et -->
      <Button class="back-btn" @click="navigateTo('/')">
        <Icon name="ri-arrow-left-line" />
        Alışverişe Devam Et
      </Button>

      <!-- Orta: Logo -->
      <NuxtLink to="/">
        <img :src="logo" class="logo" alt="ToyzzShop" />
      </NuxtLink>

      <!-- Sağ: Sadece PNG -->
      <div class="secure-box">
        <img :src="secureImg" class="secure-img" />
      </div>

    </div>

    <div class="divider"></div>
  </div>
</template>

<script setup>
import Button from "~/components/atoms/Button.vue";
import Icon from "~/components/atoms/Icon.vue";

const logo = new URL('../../../src/assets/images/logo.png', import.meta.url).href
const secureImg = new URL('../../../src/assets/images/guvenlialisveris.png', import.meta.url).href
</script>

<style scoped>
.sepet-header {
  width: 100%;
  padding: 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

/* Sol Buton */
.back-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #ccc;
  background: white;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
}

/* Orta Logo */
.logo {
  height: 90px;
  object-fit: contain;
}

/* Sağ kısım: sadece büyük resim */
.secure-box {
  display: flex;
  align-items: center;
}

.secure-placeholder {
    font-size: 12px;
    color: #666;
    border: 1px dashed #ccc;
    padding: 5px;
    border-radius: 4px;
}

.secure-img {
  height: 55px;      /* 🔥 büyütüldü */
  object-fit: contain;
}

.divider {
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 12px;
}
</style>
