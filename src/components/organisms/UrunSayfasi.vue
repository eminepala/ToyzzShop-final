<template>
  <div class="urun-sayfa">

    <!-- SOL TARAF — SLIDER -->
    <div class="left">

      <!-- Ana büyük görsel -->
      <div class="main-img-box">
        <img :src="currentImage" class="main-img" />
      </div>

      <!-- Alt küçük görseller -->
      <div class="thumb-row">
        <div
          v-for="(img, i) in images"
          :key="i"
          class="thumb"
          :class="{ active: currentImage === img }"
          @click="selectImage(i)"
        >
          <img :src="img" alt="" />
        </div>
      </div>

    </div>

    <!-- SAĞ TARAF — ÜRÜN BİLGİLERİ -->
    <div class="right">

      <span class="badge">Yeni</span>

      <h2 class="title">
        Clementoni Harry Potter Hagrid’in Kulübesi Teraryum Seti
      </h2>

      <p class="brand">
        Clementoni <span class="diger">(Diğer Ürünleri)</span>
      </p>

      <div class="price-row">
        <div class="price">1.999,99 TL</div>
        <div class="taksit">Taksit Seçenekleri →</div>
      </div>

      <PriceInfoCard type="yellow">
        Kampanya: 350 TL ve üzeri sepette %20 indirim
      </PriceInfoCard>

      <div class="sepet-row">
        <Button class="btn-sepet">Sepete Ekle</Button>
        <Icon name="ri-heart-line" class="heart" />
      </div>

      <div class="shipping">
        <Icon name="ri-truck-line" />
        Ücretsiz Kargo
      </div>

      <p class="kargo-info">
        En geç <span class="date">22 Kasım Cumartesi</span> günü kargoya verilecektir.
      </p>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";

import urun1 from "@/assets/images/urun1.png";
import urun2 from "@/assets/images/urun2.png";
import urun3 from "@/assets/images/urun3.png";
import urun4 from "@/assets/images/urun4.png";
import urun5 from "@/assets/images/urun5.png";

const images = [urun1, urun2, urun3, urun4, urun5];

const currentIndex = ref(0);
const currentImage = ref(images[currentIndex.value]);

const selectImage = (i) => {
  currentIndex.value = i;
};

watch(currentIndex, () => {
  currentImage.value = images[currentIndex.value];
});
</script>

<style>
.urun-sayfa {
  display: flex;
  gap: 50px;
  padding: 30px 40px;
}

/* SOL TARAF */
.left {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Ana görsel kutusu */
.main-img-box {
  width: 520px;
  height: 520px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  position: relative;
}

/* Ana görsel */
.main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* ALT KÜÇÜK GÖRSELLER */
.thumb-row {
  margin-top: 22px;
  display: flex;
  gap: 18px;
}

.thumb {
  width: 90px;
  height: 90px;
  padding: 6px;
  border-radius: 12px;
  border: 2px solid transparent;
  cursor: pointer;
  background: white;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.thumb.active {
  border-color: #ff9f00;
  background: rgba(255, 159, 0, 0.1);
}

/* SAĞ TARAF */
.right {
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.badge {
  background: #ffe100;
  padding: 5px 12px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  width: fit-content;
}

.title {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.4;
}

.brand {
  margin-top: -8px;
  font-size: 15px;
  color: #666;
}

.brand .diger {
  color: #ff9f00;
  cursor: pointer;
  font-weight: 600;
}

.price-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.price {
  font-size: 34px;
  font-weight: 700;
}

.taksit {
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
}

.sepet-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.btn-sepet {
  background: #ff9f00 !important;
  color: white;
  font-size: 18px;
  padding: 16px 30px;
  border-radius: 30px;
  font-weight: 600;
  flex: 1;
}

.heart {
  font-size: 30px;
  color: #ff9f00;
  cursor: pointer;
}

.shipping {
  color: #00c853;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.kargo-info {
  font-size: 15px;
  color: #444;
}

.kargo-info .date {
  font-weight: 700;
  color: #ff9f00;
}

@media (max-width: 900px) {
  .urun-sayfa {
    flex-direction: column;
  }

  .left,
  .right {
    width: 100%;
  }
}
</style>
