<template>
  <div class="best-wrapper">
    <h2 class="title">Bu Kategoride En Çok Satanlar</h2>

    <div class="slider-area">

      <!-- Sol Ok -->
      <button class="nav left" @click="prevPage">
        ‹
      </button>

      <!-- Slider -->
      <div class="slider">
        <div class="cards">
          
          <!-- Molekül Kullanımı -->
          <ProductCardSmall
            v-for="(item, i) in visibleItems"
            :key="i"
            :img="item.img"
            :name="item.name"
            :price="item.price"
            :tag="item.tag"
            :color="item.color"
          />

        </div>
      </div>

      <!-- Sağ Ok -->
      <button class="nav right" @click="nextPage">
        ›
      </button>

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Molekül import
import ProductCardSmall from "@/components/molecules/ProductCardSmall.vue";

const page = ref(0);
const perPage = 6;

/* ================================
   18 ÜRÜNLÜ MANUEL LİSTE
   ================================ */
const items = ref([
  { img: new URL("@/assets/images/altslide1.png", import.meta.url).href,  name: "Clementoni Idea Fosforlu Kalem Laboratuvarı", price: "1799.99" },
  { img: new URL("@/assets/images/altslide2.png", import.meta.url).href,  name: "Işıklı Tırnak Tasarım Stüdyosu", price: "889.99", tag: "Yeni", color: "orange" },
  { img: new URL("@/assets/images/altslide3.png", import.meta.url).href,  name: "Style 4 Ever Jel Tırnak Stüdyosu", price: "1429.99" },
  { img: new URL("@/assets/images/altslide4.png", import.meta.url).href,  name: "Aquabeads Unicorn Seti", price: "999.90", tag: "İnternete Özel Fiyat", color: "blue" },
  { img: new URL("@/assets/images/altslide5.png", import.meta.url).href,  name: "Clementoni Mini Laboratuvar", price: "499.99" },
  { img: new URL("@/assets/images/altslide6.png", import.meta.url).href,  name: "Işıklı Airbrush Peluş Cosmic Unicorn", price: "1999.99" },

  { img: new URL("@/assets/images/altslide7.png", import.meta.url).href,  name: "Airbrush Peluş Karanlıkta Parlayan Unicorn", price: "1999.99" },
  { img: new URL("@/assets/images/altslide8.png", import.meta.url).href,  name: "Aquabeads Çantalı Başlangıç Seti", price: "1099.90", tag: "İnternete Özel Fiyat", color: "blue" },
  { img: new URL("@/assets/images/altslide9.png", import.meta.url).href,  name: "Clementoni Fosforlu Kalem Seti", price: "499.99", tag: "Yeni", color: "orange" },
  { img: new URL("@/assets/images/altslide10.png", import.meta.url).href, name: "Smile Games Kabuk Boyama Seti", price: "179.99" },
  { img: new URL("@/assets/images/altslide11.png", import.meta.url).href, name: "Pretty Pinky Kristal Saç Aksesuar Seti", price: "599.99" },
  { img: new URL("@/assets/images/altslide12.png", import.meta.url).href, name: "Cool Maker Popstyle Bileklik Yapım Seti", price: "1599.00" },

  { img: new URL("@/assets/images/altslide13.png", import.meta.url).href, name: "The Squeez Maker Stitch Oyun Seti", price: "1699.99" },
  { img: new URL("@/assets/images/altslide14.png", import.meta.url).href, name: "2in1 Magic Glitter Anahtarlık Tasarım Seti", price: "479.99" },
  { img: new URL("@/assets/images/altslide15.png", import.meta.url).href, name: "Metal Dinozor Yapım Seti", price: "929.99" },
  { img: new URL("@/assets/images/altslide16.png", import.meta.url).href, name: "Unicorn Boyama Seti", price: "579.99" },
  { img: new URL("@/assets/images/altslide17.png", import.meta.url).href, name: "Frozen Sepetli Takı Seti", price: "829.99" },
  { img: new URL("@/assets/images/altslide18.png", import.meta.url).href, name: "Clementoni Stranger Things Vecna’nın Evi", price: "1999.99", tag: "Yeni", color: "orange" }
]);

/* ================================
   SAYFALAMA
   ================================ */
const maxPage = Math.ceil(items.value.length / perPage);

const visibleItems = computed(() => {
  const start = page.value * perPage;
  return items.value.slice(start, start + perPage);
});

const nextPage = () => {
  if (page.value < maxPage - 1) {
    page.value++;
  } else {
    // son sayfadaysan başa dön
    page.value = 0;
  }
};

const prevPage = () => {
  if (page.value > 0) {
    page.value--;
  } else {
    // ilk sayfadaysan son sayfaya dön
    page.value = maxPage - 1;
  }
};

</script>

<style scoped>
.best-wrapper {
  width: 100%;
  margin-top: 40px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: center;
}

.slider-area {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

/* OK BUTONLARI */
.nav {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 26px;
  flex-shrink: 0;
}

.nav:disabled {
  opacity: 0.3;
  cursor: default;
}

/* TEK SATIRDA TAM 6 ÜRÜN */
.slider {
  overflow: hidden;
  width: calc(240px * 6 + 20px * 5);
  margin: 0 auto;
}

/* ÜRÜNLER SATIRI */
.cards {
  display: flex;
  gap: 20px;
  flex-shrink: 0;
}
</style>
