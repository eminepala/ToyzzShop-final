<template>
  <div>
      <SepetHeader />

    <div class="sepet-container">

      <h1 class="title">Sepetim</h1>

      <div class="content">

        <!-- SOL TARAF -->
        <div class="left-side">

          <!-- KARGO ÜCRETSİZ BARI (ATOM: Icon.vue kullanıldı) -->
          <div class="free-shipping-banner">
            <Icon name="ri-box-3-line" class="icon" />
            750 TL üzeri alışverişlerinizde <strong>Kargo Ücretsiz</strong>
          </div>

          <!-- ÜRÜN KARTI -->
          <div class="product-card">

            <img class="product-img" src="@/assets/images/urun1.png" />

            <div class="product-info">
              <p class="product-name">
                Clementoni Harry Potter Hagrid’in Kulübesi Teraryum Seti
              </p>

              <!-- ADETLER (ATOM: Button.vue + Icon.vue) -->
              <div class="adet-row">

                <Button class="adet-btn">-</Button>

                <span class="adet">1</span>

                <Button class="adet-btn">+</Button>

                <span class="adet-text">Adet</span>

                <span class="product-price">1.999,99 TL</span>

                <Icon name="ri-delete-bin-line" class="delete" />
              </div>
            </div>

          </div>

          <!-- TESLİMAT BİLGİSİ (ATOM: Icon.vue) -->
          <div class="delivery-box">
            <Icon name="ri-truck-line" class="delivery-icon" />
            En geç <b>yarın</b> kargoya verilecektir.
          </div>

        </div>

        <!-- SAĞ TARAF -->
        <div class="right-side">
          <h2>Sipariş Özeti</h2>

          <!-- ÖZET -->
          <div class="summary shadow-box">
            <h3>Özet</h3>

            <div class="row">
              <span>Ürünler Toplamı (1 Ürün)</span>
              <span>1.999,99 TL</span>
            </div>

            <div class="row">
              <span>Kargo</span>
              <span>0,00 TL</span>
            </div>

            <div class="row total">
              <span>Toplam</span>
              <span>1.999,99 TL</span>
            </div>
          </div>

          <!-- PROMOSYON KODU -->
          <div class="promo-box shadow-box">

            <!-- ATOM: Label.vue -->
            <Label>Promosyon Kodu</Label>

            <!-- ATOM: Input.vue -->
            <Input placeholder="Kodunuzu Giriniz" />
          </div>

          <!-- TANIMLI PROMOSYON KODLARI -->
          <div class="promo-box shadow-box">

            <Label>Tanımlı Promosyon Kodlarınız</Label>

            <select class="promo-textline">
              <option>Promosyon Kodu</option>
            </select>

          </div>

          <!-- SATIN AL BUTONU (ATOM: Button.vue) -->
          <div class="buy-footer">
            <Button class="buy-btn">
              <div class="left-side-text">
                Toplam KDV Dahil<br><strong>1.999,99 TL</strong>
              </div>
              <div class="arrow">Satın Al →</div>
            </Button>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import SepetHeader from "@/components/molecules/SepetHeader.vue";
</script>

<style scoped>
.sepet-container {
  padding: 30px 40px;
  font-family: sans-serif;
}

.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
  margin-top: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

/* SOL TARAF */
.left-side {
  width: 65%;
}

.free-shipping-banner {
  background: #006eff;
  color: white;
  padding: 12px 20px;
  font-size: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ÜRÜN KARTI */
.product-card {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.product-img {
  width: 130px;
  height: 130px;
  object-fit: cover;
  border-radius: 6px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 0px;
}

.adet-row {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.adet-btn {
  width: 40px !important;
  height: 40px !important;
  padding: 0 !important; /* Daireyi bozan şey buydu */
  border-radius: 50% !important;
  border: 1px solid #ddd !important;
  background: #f5f5f5 !important;
  font-size: 20px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Fiyat */
.product-price {
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
}

.delete {
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
}

/* TESLİMAT */
.delivery-box {
  margin-top: 12px;
  background: #d9f2e1;
  padding: 12px 15px;
  font-size: 14px;
  border-radius: 6px;
}

.date {
  color: #ff9f00;
  font-weight: 700;
}

/* SAĞ TARAF */
.right-side {
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* GÖLGELİ KUTU */
.shadow-box {
  background: white;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.summary h3 {
  margin-bottom: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
}

.total {
  font-size: 16px;
  font-weight: 700;
}

/* Promosyon */
.promo-textline {
  width: 100%;
  padding: 8px 4px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  font-size: 15px;
}

/* SATIN AL */
.buy-footer {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.buy-btn {
  width: 100%;
  padding: 20px;
  background: #ff9f00;
  border: none;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}

.left-side-text {
  font-size: 14px;
  line-height: 1.3;
}

.arrow {
  font-size: 18px;
  font-weight: 700;
}
.promo-box input,
.promo-box select {
  width: 100% ;
  padding: 10px 14px;
  border-radius: 8px;
  box-sizing: border-box;
}

</style>
