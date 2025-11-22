<template>
  <div class="slider-wrapper">

    <div class="slider-row">
      <div class="slider">
        <SlideImage :src="currentImage" />
      </div>
    </div>

    <DotsRow 
      :count="images.length"
      :current="currentIndex"
      @go="goTo"
    />
  </div>
</template>

<script setup>
import SlideImage from '@/components/atoms/SlideImage.vue';
import DotsRow from '@/components/molecules/DotsRow.vue';

import { ref, computed } from "vue";

const images = Array.from({ length: 12 }, (_, i) =>
  new URL(`../../assets/images/slide${i + 1}.png`, import.meta.url).href
);

const currentIndex = ref(0);
const currentImage = computed(() => images[currentIndex.value]);

const goTo = (i) => currentIndex.value = i;
</script>
