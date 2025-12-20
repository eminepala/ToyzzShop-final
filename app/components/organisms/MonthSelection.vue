<template>
  <!-- Custom Homepage Section -->
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
      <MoleculeProductCard
        :img="item.img"
        :name="item.name"
        :price="item.price"
        :oldPrice="item.oldPrice"
        :discount="item.discount"
        :internetFiyat="item.internetFiyat"
        :yeni="item.yeni"
        @add-to-cart="handleAddToCart(item)"
      />
    </div>

    <!-- BUTON -->
    <div class="more-wrapper">
      <AtomButton
        class="more-btn"
        @click="toggleMore"
      >
        {{ buttonText }} ↓
      </AtomButton>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import MoleculeProductCard from '~/components/molecules/ProductCard.vue'
import AtomButton from '~/components/atoms/Button.vue'
import { useCartStore } from "@/stores/cartStore";

// Images imports...
import img1 from '../../../src/assets/images/anasayfa1.png'
import img2 from '../../../src/assets/images/anasayfa2.png'
import img3 from '../../../src/assets/images/anasayfa3.png'
import img4 from '../../../src/assets/images/anasayfa4.png'
import img5 from '../../../src/assets/images/anasayfa5.png'
import img6 from '../../../src/assets/images/anasayfa6.png'
import img7 from '../../../src/assets/images/anasayfa7.png'
import img8 from '../../../src/assets/images/anasayfa8.png'
import img9 from '../../../src/assets/images/anasayfa9.png'
import img10 from '../../../src/assets/images/anasayfa10.png'

const cartStore = useCartStore();

const handleAddToCart = (item) => {
  // Parse Turkish price string "1.849,00" -> 1849.00
  // Remove dots (thousands separator), replace comma with dot (decimal separator)
  let priceVal = 0;
  if (typeof item.price === 'string') {
    const cleanPrice = item.price.replace(/\./g, '').replace(',', '.');
    priceVal = parseFloat(cleanPrice);
  } else {
    priceVal = item.price;
  }

  const product = {
    id: item.id || `ms-${Date.now()}`,
    name: item.name,
    price: priceVal,
    imageUrl: item.img,
    description: "",
    categoryId: "month-selection",
    stock: 99
  };

  cartStore.addToCart(product);
  alert(`${item.name} sepete eklendi!`);
};

/* --------------------------
   TÜM ÜRÜNLER (10 ADET)
   Asset paths adjusted for components/organisms/ location (../../../src/assets/images/)
--------------------------- */
const allItems = ref([
  {
    id: "ms-1",
    img: img1,
    name: "LEGO Classic Büyük Boy Yaratıcı Kutusu",
    internetFiyat: true,
    price: "1.849,00",
    oldPrice: "1.999,00",
    discount: 8,
  },
  {
    id: "ms-2",
    img: img2,
    name: "Fisher Price Eğitici Köpekçiğin Kız Kardeşi",
    internetFiyat: true,
    price: "1.599,00",
  },
  {
    id: "ms-3",
    img: img3,
    name: "1:14 Işıklı BMW M Hybrid Uzaktan Kumandalı Araba",
    yeni: true,
    price: "2.899,00",
  },
  {
    id: "ms-4",
    img: img4,
    name: "Barbie’nin Yeni Rüya Evi HMX10",
    internetFiyat: true,
    price: "14.999,00",
    oldPrice: "15.999,00",
    discount: 6,
  },
  {
    id: "ms-5",
    img: img5,
    name: "Minibo Sesli ve Işıklı Eğitici Tablet",
    price: "649,99",
  },
  {
    id: "ms-6",
    img: img6,
    name: "Hot Wheels T-Rex ve İtfaiye İstasyonu Oyun Seti",
    internetFiyat: true,
    price: "1.799,99",
  },
  {
    id: "ms-7",
    img: img7,
    name: "Stitch Peluş 45 cm",
    yeni: true,
    discount: 21,
    oldPrice: "1.899,99",
    price: "1.499,99",
  },
  {
    id: "ms-8",
    img: img8,
    name: "Cicciobello Çok Hastayım",
    internetFiyat: true,
    discount: 30,
    oldPrice: "4.299,99",
    price: "2.999,99",
  },
  {
    id: "ms-9",
    img: img9,
    name: "Barbie Dream Besties Hazırlan Bebek Seti",
    yeni: true,
    discount: 14,
    oldPrice: "2.199,99",
    price: "1.899,99",
  },
  {
    id: "ms-10",
    img: img10,
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
  width: 100%;
  max-width: 100%;
  padding: 40px 10px;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
  box-sizing: border-box; /* CRITICAL */
  border-radius: 12px;
  margin-top: 2rem;
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
  flex-shrink: 0;
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
