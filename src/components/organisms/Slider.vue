<template>
  <div class="slider-wrapper">

    <div class="slider-row">
      <!-- Slider -->
      <div class="slider">
        <SlideImage :src="currentImage" />
      </div>
    </div>

    <!-- Noktalar -->
    <div class="dots">
      <Dot
        v-for="(dot, index) in images.length"
        :key="index"
        :active="index === currentIndex"
        @click="goTo(index)"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from "vue";

/* 🔹 Atomları import ettik */
import Dot from "@/components/atoms/Dot.vue";
import SlideImage from "@/components/atoms/SlideImage.vue";

const images = Array.from({ length: 12 }, (_, i) =>
  new URL(`../../assets/images/slide${i + 1}.png`, import.meta.url).href
);

const currentIndex = ref(0);
const currentImage = computed(() => images[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length;
};

const goTo = (i) => {
  currentIndex.value = i;
};
</script>

<style scoped>
.slider-wrapper {
  width: 92%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-row {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.slider {
  width: 100%;
  max-width: 1200px;
}

/* Noktalar */
.dots {
  margin-top: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.slide-img {
  width: 100%;
  border-radius: 14px;
}
</style>
