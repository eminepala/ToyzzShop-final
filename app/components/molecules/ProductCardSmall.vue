<template>
  <div class="card">

    <!-- Kalp (Icon Atom) -->
    <AtomIcon 
      name="ri-heart-line"
      class="heart"
    />

    <!-- Etiket (Label Atom) -->
    <AtomLabel 
      v-if="tag"
      :class="['tag', color]"
    >
      {{ tag }}
    </AtomLabel>

    <!-- Ürün resmi -->
    <img :src="img" class="product-img" />

    <!-- Ürün Adı -->
    <AtomLabel class="name">
      {{ name }}
    </AtomLabel>

    <!-- Fiyat -->
    <p class="price">{{ price }} TL</p>

    <!-- Sepete Ekle Butonu -->
    <button class="add-btn" @click.stop="$emit('add-to-cart')">
      +
    </button>


  </div>
</template>

<script setup>
import AtomIcon from "~/components/atoms/Icon.vue";
import AtomLabel from "~/components/atoms/Label.vue";

defineProps({
  img: String,
  name: String,
  price: String,
  tag: String,
  color: String
});
</script>

<style scoped>
.card {
  width: 100%; /* Fluid width */
  min-height: 380px;
  background: white;
  border-radius: 14px;
  padding: 10px; /* Reduced padding */
  position: relative;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
}

/* Kalp */
.heart {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  color: #ffbb00;
  cursor: pointer;
  z-index: 10;
}

/* Etiket */
.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  z-index: 10;
}

.orange {
  background: #ff9900;
}

.blue {
  background: #0098ff;
}

/* Resim */
.product-img {
  width: 100%;
  height: auto;
  aspect-ratio: 1/1; /* Maintain square aspect ratio */
  object-fit: contain;
  margin: 24px auto 0; /* Space for top tags */
  display: block;
}

/* Ürün adı */
.name {
  margin-top: 12px;
  font-size: 14px; /* Reduced font size to fit */
  font-weight: 500;
  flex-grow: 1; /* Push price down */
  color: #333;
  display: block;
  line-height: 1.3;
  overflow: hidden;
}

/* Fiyat */
.price {
  margin-top: 8px;
  font-size: 16px;
  font-weight: 700;
  font-weight: 700;
  color: #222;
}

.add-btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ff9900;
  color: white;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
  padding-bottom: 4px; /* Center the + vertically */
}

.add-btn:hover {
  background-color: #e68a00;
}
</style>
