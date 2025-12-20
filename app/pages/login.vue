<template>
  <div class="page">

    <!-- LOGO (Optional separate wrapper/component if needed, keeping simple here) -->
    <!-- Assuming layouts/default handles global header, but user design shows logo. 
         Ideally login page might use a 'minimal' layout or just override. 
         For now following exact user template which includes logo internally. -->
    
    <!-- KART -->
    <div class="card">

      <!-- TAB BUTONLAR (ATOM: Button.vue) -->
      <div class="tab-buttons">
        <AtomButton class="tab active">Giriş Yap</AtomButton>
        <AtomButton class="tab passive" @click="navigateTo('/register')">Kayıt Ol</AtomButton>
      </div>


      <!-- AÇIKLAMA -->
      <p class="desc">
        Lütfen cep telefon numaranızı ya da e-posta adresinizi giriniz.
        Toyzzshop.com’a kayıtlı cep telefonunuza gelen onay kodu ile
        veya e-postanıza bağlı şifreniz ile giriş yapabilirsiniz.
      </p>

      <!-- FORM -->
      <form class="form" @submit.prevent="handleLogin">

        <!-- LABEL (ATOM) -->
        <AtomLabel text="Cep Telefonunuz ya da E-postanız" />

        <!-- INPUT (ATOM) -->
        <AtomInput v-model="email" placeholder="Cep Telefonunuz ya da E-postanız" />

        <AtomLabel text="Şifre" />
        <AtomInput v-model="password" type="password" placeholder="Şifreniz" />

        <div v-if="authStore.error" class="text-red-500 text-sm">{{ authStore.error }}</div>

        <!-- GÖNDERME BUTONU (ATOM) -->
        <AtomButton class="submit" :disabled="authStore.loading">
            {{ authStore.loading ? 'Giriş Yapılıyor...' : 'Devam Et' }}
        </AtomButton>


      </form>

    </div>

  </div>
</template>

<script setup>
import AtomButton from '~/components/atoms/Button.vue'
import AtomInput from '~/components/atoms/Input.vue'
import AtomLabel from '~/components/atoms/Label.vue'
import { useAuthStore } from '~/stores/authStore'

const authStore = useAuthStore()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
    await authStore.login(email.value, password.value)
    if (authStore.user) {
        navigateTo('/')
    }
}
</script>

<style scoped>
/* === GENEL SAYFA === */
.page {
  width: 100%;
  min-height: 80vh; /* Adjusted since it's inside layout usually */
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

/* Logo */
.logo-wrapper {
 width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 5px;
}

.logo {
  width: 240px;          /* sabit */
  user-select: none;
}


/* === KART === */
.card {
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

/* === TAB BUTONLAR === */
.tab-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  gap: 10px;
}

.tab {
  padding: 10px 28px;
  border-radius: 24px;
  border: 1px solid #ddd;
  background: #fff;
  font-size: 15px;
}
.tab.active {
  background: #ffa726;
  color: white;
  border-color: #ffa726;
}
.tab.passive {
    color: #555;
    background: #fff;
}
.tab.passive:hover {
    background-color: #f9f9f9;
}

/* === AÇIKLAMA METNİ === */
.desc {
  font-size: 14px;
  color: #555;
  line-height: 20px;
  margin-bottom: 25px;
  text-align: left;
}

/* === FORM === */
.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
}

/* === SUBMIT BUTTON === */
.submit {
  margin-top: 30px;
  width: 100%;
  padding: 15px 0;
  background: #ffa726 !important;
  color: white !important;
  font-size: 18px;
  border-radius: 30px;
}
</style>
