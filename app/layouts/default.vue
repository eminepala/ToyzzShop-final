<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <TheHeader />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

const authStore = useAuthStore()

onMounted(() => {
    authStore.initAuth()
})
</script>
