<template>
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

        <!-- ARTIK HER KARTI NotifCard MOLEKÜLÜYLE ÇİZİYORUZ -->
        <NotifCard
          v-for="(item, i) in campaigns"
          :key="i"
          :img="item.img"
          :title="item.title"
        />

      </div>

    </div>

  </div>
</template>


<script setup>
import { ref } from "vue";
import NotifCard from "@/components/molecules/NotificationCard.vue"; // MOLEKÜL İMPORTU

const activeTab = ref("kampanya");

// Kampanyalar listesi
const campaigns = ref([
  {
    img: new URL("@/assets/images/kampanya1.png", import.meta.url).href,
    title: "Kasım Süper Fırsatlar"
  },
  {
    img: new URL("@/assets/images/kampanya2.png", import.meta.url).href,
    title: "Maximum Kart ile 400 TL MaxiPuan!"
  },
  {
    img: new URL("@/assets/images/kampanya3.png", import.meta.url).href,
    title: "Maximum Kart ile Peşin Fiyatına 5 Taksit!"
  },
  {
    img: new URL("@/assets/images/kampanya4.png", import.meta.url).href,
    title: "Barbie Sonsuz Olasılıklar"
  }
]);
</script>


<style scoped>
.bildirimler-wrapper {
  width: 380px;
  background: white;
  border-radius: 14px;
  padding: 0;
  overflow: hidden;
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
}

.tab.active {
  color: #ff9d00;
  border-bottom: 3px solid #ff9d00;
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
</style>
