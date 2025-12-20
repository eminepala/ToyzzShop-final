<template>
  <div class="app-container">
      <!-- Global Notification Overlay -->
      <transition name="fade">
        <div v-if="cartStore.notification.visible" class="global-notification">
            <div class="notification-content">
                <i class="ri-checkbox-circle-line icon"></i>
                <span>{{ cartStore.notification.message }}</span>
            </div>
        </div>
      </transition>

      <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cartStore'
const cartStore = useCartStore()
</script>

<style scoped>
.global-notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999; /* High z-index */
    background: #4caf50; /* Green success */
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    pointer-events: none; /* Let clicks pass through if needed, though usually fixed top is fine */
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
