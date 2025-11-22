<template>
  <div class="sepet-header">

    <!-- Sol: Alışverişe Devam Et -->
    <Button class="back-btn">
      <Icon name="ri-arrow-left-line" />
      Alışverişe Devam Et
    </Button>

    <!-- Orta: Logo -->
    <img src="@/assets/images/logo.png" class="logo" />

    <!-- Sağ: Sadece PNG -->
    <div class="secure-box">
      <img src="@/assets/images/guvenlialisveris.png" class="secure-img" />
    </div>

  </div>

  <div class="divider"></div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>

<style scoped>
.sepet-header {
  width: 100%;
  padding: 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
