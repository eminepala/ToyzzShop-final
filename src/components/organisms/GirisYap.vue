<template>
  <div class="page">

    <!-- LOGO -->
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" class="logo" alt="logo" />
    </div>

    <!-- KART -->
    <div class="card">

      <!-- TAB BUTONLAR (ATOM: Button.vue) -->
      <div class="tab-buttons">
        <Button class="tab active">Giriş Yap</Button>
        <Button class="tab passive">Kayıt Ol</Button>
      </div>


      <!-- AÇIKLAMA -->
      <p class="desc">
        Lütfen cep telefon numaranızı ya da e-posta adresinizi giriniz.
        Toyzzshop.com’a kayıtlı cep telefonunuza gelen onay kodu ile
        veya e-postanıza bağlı şifreniz ile giriş yapabilirsiniz.
      </p>

      <!-- FORM -->
      <form class="form">

        <!-- LABEL (ATOM) -->
        <Label text="Cep Telefonunuz ya da E-postanız" />

        <!-- INPUT (ATOM) -->
        <Input placeholder="Cep Telefonunuz ya da E-postanız" />

        <!-- GÖNDERME BUTONU (ATOM) -->
        <Button class="submit">Devam Et</Button>


      </form>

    </div>

  </div>
</template>

<script setup>
import Button from '../atoms/Button.vue'
import Input from '../atoms/Input.vue'
import Label from '../atoms/Label.vue'

</script>

<style scoped>
/* === GENEL SAYFA === */
.page {
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: -10px;
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
