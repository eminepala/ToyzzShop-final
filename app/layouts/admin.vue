<template>
  <div class="admin-layout">
    
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img :src="logo" alt="ToyzzShop" class="brand-logo" />
      </div>

      <nav class="nav-menu">
        <div class="nav-group">
           <p class="group-title">YÖNETİM</p>
           <NuxtLink to="/admin/products" class="nav-item" active-class="active">
             <i class="ri-store-2-line"></i>
             <span>Ürünler</span>
           </NuxtLink>
           <!-- Future categories or other links -->
        </div>

        <div class="nav-group mt-auto">
           <p class="group-title">SİTE</p>
           <NuxtLink to="/" class="nav-item">
             <i class="ri-arrow-go-back-line"></i>
             <span>Siteye Dön</span>
           </NuxtLink>
           
           <button @click="handleLogout" class="nav-item logout">
             <i class="ri-logout-box-line"></i>
             <span>Çıkış Yap</span>
           </button>
        </div>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="main-content">
      <header class="top-header">
         <h2 class="page-title">Yönetici Paneli</h2>
         <div class="user-info">
            <span class="user-name">{{ authStore.userData?.displayName || 'Admin' }}</span>
            <div class="avatar">
               <i class="ri-user-line"></i>
            </div>
         </div>
      </header>

      <div class="content-wrapper">
         <slot />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/authStore'

import logo from '../../src/assets/images/logo.png'
const authStore = useAuthStore()

onMounted(() => {
    authStore.initAuth()
})

const handleLogout = async () => {
    await authStore.logout()
    navigateTo('/login')
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  min-height: 100vh;
  background-color: #f3f4f6;
  font-family: 'Inter', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 260px;
  background-color: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 50;
}

.sidebar-header {
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-bottom: 1px solid #f3f4f6;
}

.brand-logo {
  height: 50px;
  object-fit: contain;
}

.nav-menu {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.nav-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.nav-group.mt-auto {
  margin-top: auto;
}

.group-title {
  font-size: 11px;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  margin-bottom: 8px;
  padding-left: 12px;
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  color: #4b5563;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s;
  cursor: pointer;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
}

.nav-item i {
  font-size: 18px;
  color: #9ca3af;
  transition: color 0.2s;
}

.nav-item:hover {
  background-color: #fffbeb;
  color: #d97706;
}

.nav-item:hover i {
    color: #ff9f00;
}

.nav-item.active {
  background-color: #ff9f00;
  color: white;
}

.nav-item.active i {
  color: white;
}

.nav-item.logout {
    color: #ef4444;
}
.nav-item.logout:hover {
    background-color: #fee2e2;
    color: #b91c1c;
}
.nav-item.logout i {
    color: #f87171;
}
.nav-item.logout:hover i {
    color: #b91c1c;
}


/* Main Content */
.main-content {
  flex: 1;
  margin-left: 260px;
  display: flex;
  flex-direction: column;
}

.top-header {
  height: 70px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}

.page-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.avatar {
  width: 36px;
  height: 36px;
  background: #f3f4f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 18px;
}

.content-wrapper {
  padding: 32px;
}
</style>
