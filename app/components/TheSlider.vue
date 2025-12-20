<template>
  <div class="slider-wrapper">

    <div class="slider-row">
      <!-- Slider -->
      <div class="slider">
        <AtomSlideImage :src="currentImage" />
      </div>
    </div>

    <!-- Noktalar -->
    <div class="dots">
      <AtomDot
        v-for="(dot, index) in images.length"
        :key="index"
        :active="index === currentIndex"
        @click="goTo(index)"
      />
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import AtomDot from "~/components/atoms/Dot.vue";
import AtomSlideImage from "~/components/atoms/SlideImage.vue";

// Image Array from local assets
const images = Array.from({ length: 12 }, (_, i) =>
  new URL(`../../src/assets/images/slide${i + 1}.png`, import.meta.url).href
);


const currentIndex = ref(0);
const currentImage = computed(() => images[currentIndex.value]);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const goTo = (i) => {
  currentIndex.value = i;
};

// Auto slide functionality (optional but good for slider)
let interval;
onMounted(() => {
    interval = setInterval(nextSlide, 5000);
})

onUnmounted(() => {
    clearInterval(interval);
})
</script>

<style scoped>
.slider-wrapper {
  width: 92%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto; 
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
