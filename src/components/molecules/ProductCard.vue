<template>
  <div class="product-card">

    <!-- Kart gövdesi -->
    <div class="card-body">

      <!-- ÜRÜN RESMİ -->
      <img :src="img" alt="ürün" class="product-img" />

      <!-- ORTA ALAN -->
      <div class="middle">

        <!-- ETİKETLER -->
        <div class="tags">
          <span v-if="internetFiyat" class="tag internet">İnternete Özel Fiyat</span>
          <span v-if="yeni" class="tag yeni">Yeni</span>
          <span v-if="discount" class="discount-box">-%{{ discount }}</span>
        </div>

        <!-- ÜRÜN ADI -->
        <p class="name">{{ name }}</p>

      </div>

      <!-- FİYAT ALANI -->
      <div class="price-area">
        
        <div class="old-discount-row">
          <span v-if="discount" class="discount">-%{{ discount }}</span>
          <span v-if="oldPrice" class="old">{{ oldPrice }} TL</span>
        </div>

        <span class="price">{{ price }} TL</span>

        <div v-if="sepetFiyat" class="sepet-box">
          Sepette {{ sepetFiyat }} TL
        </div>

      </div>

      <!-- FAVORİ KALP -->
      <i class="ri-heart-line fav"></i>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  name: String,
  price: String,
  oldPrice: String,
  discount: Number,
  internetFiyat: Boolean,
  yeni: Boolean,
  sepetFiyat: String
});
</script>

<style scoped>
.product-card {
  width: 100%;
}

/* KART */
.card-body {
  width: 100%;
  background: white;
  padding: 25px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 14px rgba(0,0,0,0.08);
}

/* ÜRÜN RESMİ */
.product-img {
  width: 130px;
  margin-right: 26px;
}

/* ORTA ALAN */
.middle {
  flex: 1;
}

/* ETİKETLER */
.tags {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.tag {
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: white;
}

.tag.internet { background: #ff9f2c; }
.tag.yeni { background: #9ad46e; }

.discount-box {
  padding: 4px 10px;
  background: #ff4a2d;
  color: white;
  border-radius: 8px;
  font-size: 13px;
}

/* ÜRÜN ADI */
.name {
  font-size: 18px;
  font-weight: 500;
  color: #2b2b2b;
}

/* SAĞ FİYAT BLOĞU */
.price-area {
  text-align: right;
  min-width: 180px;
}

/* İNDİRİM VE ESKİ FİYAT */
.old-discount-row {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  align-items: center;
}

.discount {
  background: #ff4a2d;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: white;
}

.old {
  text-decoration: line-through;
  color: #999;
  font-size: 14px;
}

/* FİYAT */
.price {
  display: block;
  margin-top: 6px;
  font-size: 22px;
  font-weight: 600;
  color: #222;
}

/* SEPETTE FİYAT */
.sepet-box {
  margin-top: 8px;
  background: #dff6e3;
  padding: 6px 10px;
  font-size: 13px;
  border-radius: 6px;
  color: #1b8f3c;
  font-weight: 600;
}

/* KALP */
.fav {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 20px;
  color: #ffb300;
  cursor: pointer;
}
.card-body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}
.price-area {
  text-align: right;
  width: auto;
  flex-shrink: 0;
}
.product-img {
  width: 100px;
  height: auto;
  flex-shrink: 0;
}
</style>
