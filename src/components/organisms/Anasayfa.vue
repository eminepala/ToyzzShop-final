<template>
  <div class="anasayfa">

    <!-- BAŞLIK -->
    <h1 class="title">Kasım Ayı Toyzz Shop'un Seçtikleri</h1>

    <!-- ÜRÜN LİSTESİ -->
    <div
      v-for="(item, index) in visibleItems"
      :key="index"
      class="list-item"
    >
      <!-- Sıra numarası -->
      <div class="left-number">{{ showAll ? index + 6 : index + 1 }}</div>


      <!-- Molekül -->
      <ProductCard
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :oldPrice="item.oldPrice"
        :discount="item.discount"
        :internetFiyat="item.internetFiyat"
        :yeni="item.yeni"
      />
    </div>

    <!-- BUTON -->
    <div class="more-wrapper">
      <Button
        class="more-btn"
        @click="toggleMore"
      >
        {{ buttonText }} ↓
      </Button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import ProductCard from '@/components/molecules/ProductCard.vue'
import Button from '@/components/atoms/Button.vue'


/* --------------------------
   TÜM ÜRÜNLER (10 ADET)
--------------------------- */
const allItems = ref([
  {
    img: new URL("@/assets/images/anasayfa1.png", import.meta.url).href,
    name: "LEGO Classic Büyük Boy Yaratıcı Kutusu",
    internetFiyat: true,
    price: "1.849,00",
    oldPrice: "1.999,00",
    discount: 8,
  },
  {
    img: new URL("@/assets/images/anasayfa2.png", import.meta.url).href,
    name: "Fisher Price Eğitici Köpekçiğin Kız Kardeşi",
    internetFiyat: true,
    price: "1.599,00",
  },
  {
    img: new URL("@/assets/images/anasayfa3.png", import.meta.url).href,
    name: "1:14 Işıklı BMW M Hybrid Uzaktan Kumandalı Araba",
    yeni: true,
    price: "2.899,00",
  },
  {
    img: new URL("@/assets/images/anasayfa4.png", import.meta.url).href,
    name: "Barbie’nin Yeni Rüya Evi HMX10",
    internetFiyat: true,
    price: "14.999,00",
    oldPrice: "15.999,00",
    discount: 6,
  },
  {
    img: new URL("@/assets/images/anasayfa5.png", import.meta.url).href,
    name: "Minibo Sesli ve Işıklı Eğitici Tablet",
    price: "649,99",
  },

  /* ===== 6 → 10 ürünleri ekledim ===== */
  {
    img: new URL("@/assets/images/anasayfa6.png", import.meta.url).href,
    name: "Hot Wheels T-Rex ve İtfaiye İstasyonu Oyun Seti",
    internetFiyat: true,
    price: "1.799,99",
  },
  {
    img: new URL("@/assets/images/anasayfa7.png", import.meta.url).href,
    name: "Stitch Peluş 45 cm",
    yeni: true,
    discount: 21,
    oldPrice: "1.899,99",
    price: "1.499,99",
  },
  {
    img: new URL("@/assets/images/anasayfa8.png", import.meta.url).href,
    name: "Cicciobello Çok Hastayım",
    internetFiyat: true,
    discount: 30,
    oldPrice: "4.299,99",
    price: "2.999,99",
  },
  {
    img: new URL("@/assets/images/anasayfa9.png", import.meta.url).href,
    name: "Barbie Dream Besties Hazırlan Bebek Seti",
    yeni: true,
    discount: 14,
    oldPrice: "2.199,99",
    price: "1.899,99",
  },
  {
    img: new URL("@/assets/images/anasayfa10.png", import.meta.url).href,
    name: "LEGO Technic Nissan Skyline GT-R (R34)",
    internetFiyat: true,
    discount: 7,
    oldPrice: "5.399,00",
    price: "4.999,00",
  },
]);

/* --------------------------
   GÖRÜNÜRLÜK
--------------------------- */
const showAll = ref(false);

const visibleItems = computed(() => {
  if (showAll.value) {
    // SADECE 6–10 ARASI ÜRÜNLER
    return allItems.value.slice(5, 10);
  }

  // SADECE 1–5 ARASI ÜRÜNLER
  return allItems.value.slice(0, 5);
});


/* --------------------------
   BUTON
--------------------------- */
const buttonText = computed(() =>
  showAll.value ? "Daha Az Göster" : "Daha Fazla Göster"
);

const toggleMore = () => {
  showAll.value = !showAll.value;
};
</script>


<style scoped>
/* SAYFA ARKA PLAN */
.anasayfa {
  background-color: #d9fef9;
  min-height: 100vh;
  width: 100%;
  max-width: 100%;
  padding: 40px 10px;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
  box-sizing: border-box; /* CRITICAL */
}



/* BAŞLIK */
.title {
  font-size: 34px;
  font-weight: 700;
  color: #2b2b2b;
  margin-bottom: 34px;
  text-align: center;
}

/* SATIR */
.list-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 28px;
}

.left-number {
  width: 50px;
  height: 50px;
  background: #8cc6ce;
  color: white;
  font-size: 22px;
  font-weight: 300;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* GÖSTER BUTONU */
.more-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 40px 0;
}

.more-btn {
  padding: 10px 22px;
  font-size: 16px;
  font-weight: 600;
}

</style>
