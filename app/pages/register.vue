<template>
  <div class="register-page">

    <!-- FORM KARTI -->
    <div class="register-card">

      <!-- ÜST TAB -->
      <div class="tab-buttons">
        <AtomButton class="tab passive" @click="navigateTo('/login')">Giriş Yap</AtomButton>
        <AtomButton class="tab active">Kayıt Ol</AtomButton>
      </div>

      <!-- FORM -->
      <form class="form" @submit.prevent="handleRegister">

        <!-- AD -->
        <AtomLabel text="Adınız*" />
        <AtomInput v-model="firstName" placeholder="Adınız" required />

        <!-- SOYAD -->
        <AtomLabel text="Soyadınız*" />
        <AtomInput v-model="lastName" placeholder="Soyadınız" required />

        <!-- E-POSTA -->
        <AtomLabel text="E-posta Adresiniz*" />
        <AtomInput v-model="email" placeholder="E-posta Adresiniz" type="email" required />

        <!-- PAROLA -->
        <AtomLabel text="Parolanız*" />
        <div class="password-wrapper">
          <AtomInput v-model="password" type="password" placeholder="Parolanız" required />
          <!-- <span class="eye-icon">👁</span>  Optional toggle logic can be added -->
        </div>

        <!-- TELEFON -->
        <AtomLabel text="Telefon Numaranız*" />
        <AtomInput v-model="phone" placeholder="Telefon Numaranız" />

        <div v-if="authStore.error" class="text-red-500 text-sm mt-2">{{ authStore.error }}</div>

        <!-- CHECKBOXLAR -->
        <div class="checkbox-area">

          <!-- ZORUNLU ONAYLAR -->
          <AtomCheckbox class="required" v-model="agreement">
           <a>Üyelik Sözleşmesini</a> okudum, kabul ediyorum
          </AtomCheckbox>

          <AtomCheckbox class="required" v-model="privacy">
            <a>Gizlilik Sözleşmesini</a> okudum, kabul ediyorum
          </AtomCheckbox>

          <AtomCheckbox class="required" v-model="kvkk">
            <a>Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metnini</a> okudum, kabul ediyorum
          </AtomCheckbox>

          <hr />

           <p class="info-title">Önemli kampanyalardan haberdar olmak istiyorum.</p>

          <!-- ALTTAKİ KAMPANYA İZİNLERİ (AÇIK GRİ) -->
          <AtomCheckbox class="campaign">
          <a>Ticari Elektronik İleti Aydınlatma Metni</a> kapsamında 
          elektronik ileti (SMS) izni veriyorum
          </AtomCheckbox>

           <AtomCheckbox class="campaign">
          <a>Ticari Elektronik İleti Aydınlatma Metni</a> kapsamında
           elektronik ileti (E-posta) izni veriyorum
          </AtomCheckbox>  

        </div>

        <!-- KAYIT BUTONU -->
        <AtomButton class="register-btn" :disabled="authStore.loading">
            {{ authStore.loading ? 'Kayıt Yapılıyor...' : 'Kayıt Ol' }}
        </AtomButton>

      </form>
    </div>
  </div>
</template>

<script setup>
import AtomButton from "@/components/atoms/Button.vue";
import AtomInput from "@/components/atoms/Input.vue";
import AtomLabel from "@/components/atoms/Label.vue";
import AtomCheckbox from "@/components/atoms/Checkbox.vue";
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const phone = ref('')

// Agreements
const agreement = ref(false)
const privacy = ref(false)
const kvkk = ref(false)

const handleRegister = async () => {
    if (!agreement.value || !privacy.value || !kvkk.value) {
        alert('Lütfen zorunlu alanları onaylayınız.')
        return
    }

    const fullName = `${firstName.value} ${lastName.value}`
    // Firebase bağlantısı kaldırıldı (Kullanıcı isteği üzerine)
    // await authStore.register(email.value, password.value, fullName)
    
    // Simüle edilmiş başarı durumu
    alert('Kayıt başarılı! (Demo Modu: Veritabanına kaydedilmedi)')
    await navigateTo('/')
}
</script>

<style scoped>
.register-page {
  width: 100%;
  min-height: 80vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.logo-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 5px;
}

.logo {
  width: 240px;
  user-select: none;
}


/* KART */
.register-card {
  width: 500px;
  background: white;
  padding: 40px 50px;
  border-radius: 16px;
  box-shadow: 0 6px 35px rgba(0, 0, 0, 0.12);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;  
  box-sizing: border-box; /* önemli */
}


/* TABS */
.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
}

.tab {
  padding: 10px 28px;
  border-radius: 24px;
  font-size: 15px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.tab.active {
  background: #ffa726 !important;
  color: white !important;
  border-color: #ffa726 !important;
}
.tab.passive {
    color: #555;
    background: #fff;
}
.tab.passive:hover {
    background-color: #f9f9f9;
}

/* FORM */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.password-wrapper {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 12px;
  top: 14px;
  cursor: pointer;
  font-size: 17px;
}

/* CHECKBOX ALANI */
.checkbox-area {
  margin-top: 25px;
}

.info-title {
  margin: 20px 0 10px;
  font-weight: bold;
  font-size: 14px;
  color: #333;
}

/* KAYIT BTN */
.register-btn {
  margin-top: 25px;
  width: 100%;
  padding: 16px 0;
  background: #ffa726 !important;
  color: white !important;
  border-radius: 30px !important;
  font-size: 18px;
}
.required .text {
  font-weight: 600;   /* Sadece ilk 3 checkbox koyu */
  color: #000;
}

.checkbox-area hr {
  margin: 25px 0;
  border: none;
  border-top: 1px solid #e5e5e5;
}

/* Kampanya checkboxları gri */
.info-title {
  font-weight: 600;
  font-size: 14px;
  margin: 20px 0 10px;
}
/* ALTTaki kampanya izinleri → Açık gri */
.campaign .text {
  color: #848484;
  font-weight: 400;
}
</style>
