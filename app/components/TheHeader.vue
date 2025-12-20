<template>
  <div>
    <!-- ÜST BEYAZ HEADER -->
    <div class="top-header" :style="{ backgroundImage: `url(${headerBg})` }">

      <!-- SOL TARAF: LOGO -->
      <div class="logo-wrapper">
        <NuxtLink to="/">
           <img :src="logo" class="logo" alt="ToyzzShop" />
        </NuxtLink>
      </div>

      <!-- SAĞ TARAF: LINKS -->
      <div class="links">
        <a href="#" class="link">Mağazalar</a>
        <span class="divider">|</span>
        <a href="#" class="link">Yardım</a>
      </div>

    </div>

    <!-- ALT ÇİZGİ -->
    <div class="bottom-line"></div>

    <!-- ALT SARI HEADER -->
    <div class="bottom-bar">

      <!-- KATEGORİLER -->
      <AtomButton class="kategori-btn">
        <AtomIcon name="ri-apps-2-line" class="icon" />
        Kategoriler
        <AtomIcon name="ri-arrow-down-s-line" class="arrow" />
      </AtomButton>

      <!-- SEARCH -->
      <div class="search-box">
        <AtomIcon name="ri-search-line" class="search-icon" />
        <AtomInput
          class="search-input"
          placeholder="Kasım Ayı İnternete Özel Avantajlı Fiyatlar"
        />
      </div>

      <!-- SAĞ ICONLAR -->
      <div class="right-icons">


        <!-- NOTIFICATION -->
        <div class="notif" @click="toggleNotifications" ref="notifTrigger">
          <AtomIcon name="ri-notification-2-line" />
          
          <!-- POPUP -->
          <div v-if="showNotifications" class="notif-popup" @click.stop>
            <div class="bildirimler-wrapper">
              <!-- ÜST TABLAR -->
              <div class="tabs">
                <button
                  class="tab"
                  :class="{ active: activeTab === 'bildirim' }"
                  @click="activeTab = 'bildirim'"
                >
                  Bildirimler
                </button>

                <button
                  class="tab"
                  :class="{ active: activeTab === 'kampanya' }"
                  @click="activeTab = 'kampanya'"
                >
                  Kampanyalar
                </button>
              </div>

              <!-- İÇERİK -->
              <div class="content-area">

                <!-- BİLDİRİM BOŞ -->
                <div v-if="activeTab === 'bildirim'" class="empty">
                  <p>Bildirimleriniz bulunmamaktadır.</p>
                </div>

                <!-- KAMPANYALAR -->
                <div v-if="activeTab === 'kampanya'" class="campaigns">

                  <MoleculeNotificationCard
                    v-for="(item, i) in campaigns"
                    :key="i"
                    :img="item.img"
                    :title="item.title"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>

        <!-- GİRİŞ YAP / USER -->
        <div class="giris" @click="handleAuthClick">
          <AtomIcon name="ri-user-line" />
          <div class="flex flex-col ml-2 leading-tight">
             <span v-if="authStore.user" class="text-xs text-gray-700">Merhaba</span>
             <span>{{ authStore.user ? (authStore.userData?.displayName || 'Hesabım') : 'Giriş yap' }}</span>
          </div>
        </div>

        <!-- SEPET -->
        <div class="sepet-btn" @click="router.push('/cart')">
          <AtomIcon name="ri-shopping-bag-3-line" />
          <span class="ml-1">Sepetim</span>
          <span v-if="cartStore.itemCount > 0" class="ml-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">{{ cartStore.itemCount }}</span>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

import AtomIcon from '~/components/atoms/Icon.vue'
import AtomButton from '~/components/atoms/Button.vue'
import AtomInput from '~/components/atoms/Input.vue'
import MoleculeNotificationCard from '~/components/molecules/NotificationCard.vue'
import { useAuthStore } from '~/stores/authStore'
import { useCartStore } from '~/stores/cartStore'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const cartStore = useCartStore()
const router = useRouter()

const logo = new URL("../../src/assets/images/logo.png", import.meta.url).href
const headerBg = new URL("../../src/assets/images/header-bg.jpg", import.meta.url).href

// Notification Logic
const showNotifications = ref(false)
const activeTab = ref("kampanya")
const notifTrigger = ref<HTMLElement | null>(null)

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const closeNotifications = (e: Event) => {
    if (notifTrigger.value && !notifTrigger.value.contains(e.target as Node)) {
        showNotifications.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', closeNotifications)
})

onUnmounted(() => {
    document.removeEventListener('click', closeNotifications)
})

// Kampanyalar listesi (Asset URLs replaced with placeholders purely for logic demo if assets missing, 
// using generic toy images or similar if actual assets not guaranteed)
// Note: If assets/images/kampanya1.png doesn't exist, this might break. 
// I will use placeholder images for safety unless I check files.
const campaigns = ref([
  {
    img: new URL("../../src/assets/images/kampanya1.png", import.meta.url).href,
    title: "Kasım Süper Fırsatlar"
  },
  {
    img: new URL("../../src/assets/images/kampanya2.png", import.meta.url).href,
    title: "Maximum Kart ile 400 TL MaxiPuan!"
  },
  {
    img: new URL("../../src/assets/images/kampanya3.png", import.meta.url).href,
    title: "Maximum Kart ile Peşin Fiyatına 5 Taksit!"
  },
  {
    img: new URL("../../src/assets/images/kampanya4.png", import.meta.url).href,
    title: "Barbie Sonsuz Olasılıklar"
  }
]);

const handleAuthClick = () => {
    if (authStore.user) {
        // Maybe go to profile or logout? For now toggle logout for demo or go to home
         if(confirm('Çıkış yapılsın mı?')) {
             authStore.logout()
             router.push('/')
         }
    } else {
        router.push('/login')
    }
}
</script>

<style scoped>

/* ---------------------------------------------------- */
/* ÜST BEYAZ HEADER */
/* ---------------------------------------------------- */
.top-header {
  width: 100%;
  height: 120px;
  background-color: #ffffff; /* Fallback */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
}

.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: 85px;
  user-select: none;
}

.tagline {
  font-size: 14px;
  font-weight: 600;
  margin-top: -8px;
  color: #444;
}

/* SAĞ LİNKLER */
.links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.link {
  text-decoration: none;
  font-size: 15px;
  color: #666;
  font-weight: 500;
}

.link:hover {
  color: #000;
}

.divider {
  color: #aaa;
}

/* ALT SARI ÇİZGİ */
.bottom-line {
  width: 100%;
  height: 4px;
  background: #ffcd32;
}

/* ------------------------------------------------------ */
/* ALT HEADER — SARI KISIM */
/* ------------------------------------------------------ */
.bottom-bar {
  width: 100%;
  display: flex;
  align-items: center;
  background: #ffcd32;
  height: 75px;
  padding: 0 40px;
  gap: 30px;
  box-sizing: border-box;
}

/* KATEGORİLER */
.kategori-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffd84d !important;
  padding: 12px 24px !important;
  border-radius: 10px !important;
  border: 2px solid #e3b600 !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  cursor: pointer;
  color: #000 !important;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,0.12);
}

.kategori-btn .icon,
.kategori-btn .arrow {
  font-size: 20px;
}

/* SEARCH */
.search-box {
  flex: 1;
  height: 48px;
  background: white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0 18px;
}

.search-icon {
  font-size: 20px;
  color: #777;
  margin-right: 8px;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 15px;
}

/* RIGHT ICONS */
.right-icons {
  display: flex;
  align-items: center;
  gap: 22px;
}


/* NOTIFICATION */
.notif {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #444;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative; /* Added for popup absolute positioning */
}

.notif Icon {
  font-size: 20px;
  color: #333;
}

/* POPUP STYLES */
.notif-popup {
    position: absolute;
    top: 55px;
    right: -100px;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    border-radius: 14px;
}

/* Include the provided scoped styles for internal popup structure */
.bildirimler-wrapper {
  width: 380px;
  background: white;
  border-radius: 14px;
  padding: 0;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.tabs {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #ddd;
  background: #fff;
}

.tab {
  flex: 1;
  padding: 12px;
  text-align: center;
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #666;
  transition: color 0.2s, border-bottom 0.2s;
}

.tab:hover {
    background-color: #f9f9f9;
}

.tab.active {
  color: #ff9d00;
  border-bottom: 3px solid #ff9d00;
  background-color:#fff;
}

.content-area {
  padding: 15px;
  max-height: 400px;
  overflow-y: auto;
}

.empty {
  text-align: center;
  padding: 40px 0;
  color: #666;
}

.campaigns {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* GİRİŞ YAP */
.giris {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  color: #000;
}

.giris Icon {
  font-size: 20px;
}

/* SEPET */
.sepet-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #ffe889;
  padding: 12px 24px;
  border-radius: 10px;
  border: 2px solid #e3b600;
  cursor: pointer;
  font-weight: 600;
  box-shadow: inset 0 -2px 0 rgba(0,0,0,0.13);
}

.sepet-btn Icon {
  font-size: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .top-header, .bottom-bar {
        padding: 0 16px;
    }
    .links, .kategori-btn, .search-box {
        display: none;
    }
    .bottom-bar {
        justify-content: space-between;
    }
    .logo {
        height: 60px;
    }
    .top-header {
        height: 80px;
    }
}
</style>
