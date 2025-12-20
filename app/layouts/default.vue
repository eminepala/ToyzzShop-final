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
import { useCartStore } from '~/stores/cartStore'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

const authStore = useAuthStore()
const cartStore = useCartStore()

onMounted(() => {
    authStore.initAuth()
})
</script>

<style scoped>
.global-notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    background: #4caf50;
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 8px;
}

.icon {
    font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
