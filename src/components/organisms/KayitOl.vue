<template>
  <div class="register-page">

    <!-- LOGO -->
    <div class="logo-wrapper">
      <img src="@/assets/images/logo.png" class="logo" alt="logo" />
    </div>

    <!-- FORM KARTI -->
    <div class="register-card">

      <!-- ÜST TAB -->
      <div class="tab-buttons">
        <Button class="tab passive">Giriş Yap</Button>
        <Button class="tab active">Kayıt Ol</Button>
      </div>

      <!-- FORM -->
      <form class="form">

        <!-- AD -->
        <Label text="Adınız*" />
        <Input placeholder="Adınız" />

        <!-- SOYAD -->
        <Label text="Soyadınız*" />
        <Input placeholder="Soyadınız" />

        <!-- E-POSTA -->
        <Label text="E-posta Adresiniz*" />
        <Input placeholder="E-posta Adresiniz" />

        <!-- PAROLA -->
        <Label text="Parolanız*" />
        <div class="password-wrapper">
          <Input type="password" placeholder="Parolanız" />
          <span class="eye-icon">👁</span>
        </div>

        <!-- TELEFON -->
        <Label text="Telefon Numaranız*" />
        <Input placeholder="Telefon Numaranız" />

        <!-- CHECKBOXLAR -->
        <div class="checkbox-area">

          <!-- ZORUNLU ONAYLAR -->
          <Checkbox class="required">
           <a>Üyelik Sözleşmesini</a> okudum, kabul ediyorum
          </Checkbox>

          <Checkbox class="required">
            <a>Gizlilik Sözleşmesini</a> okudum, kabul ediyorum
          </Checkbox>

          <Checkbox class="required">
            <a>Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metnini</a> okudum, kabul ediyorum
          </Checkbox>

<hr />

       <p class="info-title">Önemli kampanyalardan haberdar olmak istiyorum.</p>

      <!-- ALTTAKİ KAMPANYA İZİNLERİ (AÇIK GRİ) -->
      <Checkbox class="campaign">
      <a>Ticari Elektronik İleti Aydınlatma Metni</a> kapsamında 
      elektronik ileti (SMS) izni veriyorum
      </Checkbox>

       <Checkbox class="campaign">
      <a>Ticari Elektronik İleti Aydınlatma Metni</a> kapsamında
       elektronik ileti (E-posta) izni veriyorum
      </Checkbox>  

        </div>

        <!-- KAYIT BUTONU -->
        <Button class="register-btn">Kayıt Ol</Button>

      </form>
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/atoms/Button.vue";
import Input from "@/components/atoms/Input.vue";
import Label from "@/components/atoms/Label.vue";
import Checkbox from "@/components/atoms/Checkbox.vue";
</script>

<style scoped>
.register-page {
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: -10px;
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

.active {
  background: #ffa726 !important;
  color: white !important;
  border-color: #ffa726 !important;
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
