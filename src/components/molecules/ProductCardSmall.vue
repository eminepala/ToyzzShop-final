<template>
  <div class="card">

    <!-- Kalp (Icon Atom) -->
    <Icon 
      name="ri-heart-line"
      class="heart"
    />

    <!-- Etiket (Label Atom) -->
    <Label 
      v-if="tag"
      :class="['tag', color]"
    >
      {{ tag }}
    </Label>

    <!-- Ürün resmi -->
    <img :src="img" class="product-img" />

    <!-- Ürün Adı -->
    <Label class="name">
      {{ name }}
    </Label>

    <!-- Fiyat -->
    <p class="price">{{ price }} TL</p>

  </div>
</template>

<script setup>
import Icon from "@/components/atoms/Icon.vue";
import Label from "@/components/atoms/Label.vue";

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
  width: 240px;
  min-height: 380px;
  background: white;
  border-radius: 14px;
  padding: 14px;
  position: relative;
  flex-shrink: 0;
}

/* Kalp */
.heart {
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 20px;
  color: #ffbb00;
}

/* Etiket */
.tag {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: white;
}

.orange {
  background: #ff9900;
}

.blue {
  background: #0098ff;
}

/* Resim */
.product-img {
  width: 190px;
  height: 190px;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

/* Ürün adı */
.name {
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  min-height: 50px;
  color: #333;
}

/* Fiyat */
.price {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
}
</style>
