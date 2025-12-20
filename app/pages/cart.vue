<template>
  <div>
    <SepetHeader />

    <div class="sepet-container">

      <h1 class="title">Sepetim</h1>

      <!-- EMPTY STATE -->
      <div v-if="isEmpty" class="empty-cart-message">
        <Icon name="ri-shopping-cart-line" class="empty-icon" />
        <p>Sepetiniz şu an boş.</p>
        <Button class="start-shopping-btn" @click="router.push('/')">Alışverişe Başla</Button>
      </div>

      <!-- CART CONTENT -->
      <div v-else class="content">

        <!-- SOL TARAF -->
        <div class="left-side">

          <!-- KARGO ÜCRETSİZ BARI -->
          <div class="free-shipping-banner">
            <Icon name="ri-box-3-line" class="icon" />
            750 TL üzeri alışverişlerinizde <strong>Kargo Ücretsiz</strong>
          </div>

          <!-- ÜRÜN KARTLARI (Dynamic) -->
          <div 
            v-for="item in cartItems" 
            :key="item.product.id" 
            class="product-card"
          >
            <img class="product-img" :src="item.product.imageUrl || (item.product as any).image" />

            <div class="product-info">
              <p class="product-name">
                {{ item.product.name }}
              </p>

              <div class="adet-row">
                <Button class="adet-btn">-</Button>
                <span class="adet">{{ item.quantity }}</span>
                <Button class="adet-btn" @click="increment(item)">+</Button>
                
                <span class="adet-text">Adet</span>

                <span class="product-price">{{ formatPrice(item.product.price * item.quantity) }} TL</span>

                <Icon 
                  name="ri-delete-bin-line" 
                  class="delete" 
                  @click="handleRemoveItem(item)"
                />
              </div>
            </div>
          </div>

          <!-- TESLİMAT BİLGİSİ -->
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
              <span>Ürünler Toplamı ({{ cartItems.length }} Ürün)</span>
              <span>{{ formatPrice(totalPrice) }} TL</span>
            </div>

            <div class="row">
              <span>Kargo</span>
              <span>0,00 TL</span>
            </div>

            <div class="row total">
              <span>Toplam</span>
              <span>{{ formatPrice(totalPrice) }} TL</span>
            </div>
          </div>

          <!-- PROMOSYON KODU -->
          <div class="promo-box shadow-box">
            <Label>Promosyon Kodu</Label>
            <Input placeholder="Kodunuzu Giriniz" />
          </div>

          <!-- TANIMLI PROMOSYON KODLARI -->
          <div class="promo-box shadow-box">
            <Label>Tanımlı Promosyon Kodlarınız</Label>
            <select class="promo-textline">
              <option>Promosyon Kodu</option>
            </select>
          </div>

          <!-- SATIN AL BUTONU -->
          <div class="buy-footer">
            <Button class="buy-btn" @click="handleBuy">
              <div class="left-side-text">
                Toplam KDV Dahil<br><strong>{{ formatPrice(totalPrice) }} TL</strong>
              </div>
              <div class="arrow">Satın Al →</div>
            </Button>
          </div>

        </div>

      </div>


    </div>

    <!-- Best Sellers Slider -->
    <OrganismsBestSellers />

    <!-- Month Selection -->
    <OrganismsMonthSelection />

    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useOrderStore } from "~/stores/orderStore";
import { useAuthStore } from "~/stores/authStore";
import { useCartStore } from "~/stores/cartStore";
import type { ICartItem } from "~/types";

// Explicit imports as requested by user to ensure components render correctly
import Button from "@/components/atoms/Button.vue";
import Icon from "@/components/atoms/Icon.vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import SepetHeader from "@/components/molecules/SepetHeader.vue";
import OrganismsBestSellers from "@/components/organisms/BestSellers.vue";
import OrganismsMonthSelection from "@/components/organisms/MonthSelection.vue";
// TheFooter is auto-imported usually but user didn't specify it in imports. Kept existing auto imports for others.

const authStore = useAuthStore();
const orderStore = useOrderStore();
const cartStore = useCartStore();
const router = useRouter();

const cartItems = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.totalPrice);
const isEmpty = computed(() => cartStore.items.length === 0);

// Helper to format price
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
}

const handleBuy = async () => {
    if (!authStore.user) {
        alert('Lütfen sipariş vermek için giriş yapınız.');
        router.push('/login');
        return;
    }

    try {
        await orderStore.createOrder(authStore.user.uid, cartStore.items, cartStore.totalPrice);
        cartStore.clearCart();
        alert('Siparişiniz başarıyla alındı!');
        router.push('/');
    } catch (e) {
        alert('Sipariş oluşturulurken bir hata oluştu.');
    }
}

const handleRemoveItem = (item: ICartItem) => {
  cartStore.removeItem(item);
  if (cartStore.items.length === 0) {
    router.push('/');
  }
}

const increment = (item: ICartItem) => {
  // Logic to increment quantity would go here if store supported it directly, 
  // or we can just add same product again
  cartStore.addToCart(item.product);
}

const decrement = (item: ICartItem) => {
  // Logic to decrement
  // For now simple alert or implementation if store supports
  // Assuming remove if 1? Or just decrement. 
  // Store update required for decrement. using remove for now if desired.
  // The user request was specific about "delete" button.
}

</script>


<style scoped>
.sepet-container {
  padding: 30px 40px;
  font-family: sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
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

.product-info {
  flex: 1;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
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
  color: #333;
}

.adet {
    font-weight: 600;
    font-size: 16px;
}

.adet-text {
    color: #666;
}

/* Fiyat */
.product-price {
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

.delete {
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  color: #999;
}

.delete:hover {
    color: #f00;
}

/* TESLİMAT */
.delivery-box {
  margin-top: 12px;
  background: #d9f2e1;
  padding: 12px 15px;
  font-size: 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.delivery-icon {
    font-size: 18px;
    color: #2e7d32;
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
  font-size: 18px;
  font-weight: 700;
}

.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #555;
}

.total {
  font-size: 18px;
  font-weight: 700;
  color: #000;
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

/* Promosyon */
.promo-textline {
  width: 100%;
  padding: 8px 4px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  font-size: 15px;
  background: transparent;
}

/* SATIN AL */
.buy-footer {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.buy-btn {
  width: 100%;
  padding: 15px 20px;
  background: #ff9f00;
  border: none;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.buy-btn:hover {
    background: #e68a00;
}

.left-side-text {
  font-size: 13px;
  line-height: 1.3;
  text-align: left;
}

.arrow {
  font-size: 18px;
  font-weight: 700;
}
.promo-box input,
.promo-box select {
  width: 100% ;
  padding: 10px 0;
  box-sizing: border-box;
}

</style>
