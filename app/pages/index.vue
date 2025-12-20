<template>
  <NuxtLayout name="default">
    <div class="space-y-8">
      
      <!-- Hero Slider -->
      <TheSlider />

      <!-- Featured Product Detail -->
      <OrganismProductDetail />



      <div v-if="productStore.loading" class="text-center py-12">
        <p class="text-xl text-gray-500 font-bold">Loading fun...</p>
      </div>

       <div v-else-if="productStore.error" class="text-center py-12 text-red-500">
        {{ productStore.error }}
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in productStore.products"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>


      <!-- Custom Homepage Section -->
      <OrganismMonthSelection />

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'
import { useCartStore } from '~/stores/cartStore'
import type { IProduct } from '~/types'
import TheSlider from '~/components/TheSlider.vue'
import OrganismMonthSelection from '~/components/organisms/MonthSelection.vue'
import OrganismProductDetail from '~/components/organisms/ProductDetail.vue'
import { onMounted } from 'vue'

const productStore = useProductStore()
const cartStore = useCartStore()

onMounted(() => {
  productStore.fetchProducts()
})

const handleAddToCart = (product: IProduct) => {
  cartStore.addToCart(product)
  // Simple aleart for now
  alert('Added to cart!')
}
</script>
