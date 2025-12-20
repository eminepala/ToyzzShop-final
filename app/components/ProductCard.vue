<template>
  <div class="card">
    
    <!-- Heart Icon (Top Right) -->
    <div class="heart-icon">
      <i class="ri-heart-line"></i>
    </div>

    <!-- Product Image -->
    <div class="img-wrapper">
       <img 
          :src="product.imageUrl" 
          :alt="product.name" 
          class="product-img" 
          v-if="product.imageUrl"
       />
       <div v-else class="placeholder-img">
          <i class="ri-image-line"></i>
       </div>
    </div>

    <!-- Product Info -->
    <div class="info">
       <h3 class="name">{{ product.name }}</h3>
       <p class="price">{{ formatPrice(product.price) }} TL</p>
    </div>

    <!-- Add Button (Orange Circle +) -->
    <button class="add-btn" @click.stop="$emit('add-to-cart', product)">
       <i class="ri-add-line"></i>
    </button>

  </div>
</template>

<script setup lang="ts">
import type { IProduct } from '~/types'

defineProps<{
  product: IProduct
}>()

defineEmits(['add-to-cart'])

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price);
}
</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  padding: 12px;
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;
  min-height: 320px;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ffb300;
  font-size: 20px;
  cursor: pointer;
  z-index: 5;
}

.img-wrapper {
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  padding: 10px;
  box-sizing: border-box;
}

.product-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.placeholder-img {
  font-size: 40px;
  color: #ccc;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-top: auto; /* Push to bottom of info */
}

/* ADD BUTTON */
.add-btn {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  background-color: #ff9f00;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(255, 159, 0, 0.3);
  transition: background-color 0.2s, transform 0.1s;
}

.add-btn:hover {
  background-color: #e68a00;
  transform: scale(1.05);
}

.add-btn:active {
  transform: scale(0.95);
}
</style>

