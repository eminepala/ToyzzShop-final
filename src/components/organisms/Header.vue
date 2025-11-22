<template>

  <!-- ÜST BEYAZ HEADER -->
  <div class="top-header">

    <!-- SOL TARAF: LOGO -->
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" class="logo" alt="ToyzzShop" />
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
    <Button class="kategori-btn">
      <Icon name="ri-apps-2-line" class="icon" />
      Kategoriler
      <Icon name="ri-arrow-down-s-line" class="arrow" />
    </Button>

    <!-- SEARCH -->
    <div class="search-box">
      <Icon name="ri-search-line" class="search-icon" />
      <Input
        class="search-input"
        placeholder="Kasım Ayı İnternete Özel Avantajlı Fiyatlar"
      />
    </div>

    <!-- SAĞ ICONLAR -->
    <div class="right-icons">

      <!-- NOTIFICATION -->
      <div class="notif">
        <Icon name="ri-notification-2-line" />
      </div>

      <!-- GİRİŞ YAP -->
      <div class="giris">
        <Icon name="ri-user-line" />
        Giriş yap
      </div>

      <!-- SEPET -->
      <div class="sepet-btn">
        <Icon name="ri-shopping-bag-3-line" />
        Sepetim
      </div>

    </div>

  </div>

</template>

<script setup>
import Icon from '@/components/atoms/Icon.vue'
import Button from '@/components/atoms/Button.vue'
import Input from '@/components/atoms/Input.vue'
</script>

<style scoped>

/* ---------------------------------------------------- */
/* ÜST BEYAZ HEADER */
/* ---------------------------------------------------- */
.top-header {
  width: 100%;
  height: 120px;
  background: #ffffff;
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
}

.notif Icon {
  font-size: 20px;
  color: #333;
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

</style>
