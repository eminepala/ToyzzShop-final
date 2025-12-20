<template>
  <div class="footer">

    <!-- ÜST SARI BANNER -->
    <div class="app-banner">
      <img :src="footerBanner" class="banner-img" />
    </div>

    <!-- ORTA BÖLGE: SOL GRID + SAĞ KUTULAR -->
    <div class="middle-area">

      <!-- SOL GRID (6 kolon) -->
      <div class="footer-grid">

        <MoleculeFooterColumn
          title="Kategoriler"
          :items="[
            'Oyuncaklar','Araçlar','Anne Bebek','Kırtasiye Ve Okul',
            'Karakterler','Fırsatlar','Pet Shop'
          ]"
        />

        <MoleculeFooterColumn
          title="Özel Sayfalar"
          :items="[
            'Tüm Kampanyalar','Fırsatlar','Kasım Ayının En Popüler Oyuncağı',
            'En Sevilen 50 Oyuncak','Yetişkinler İçin LEGO Setleri',
            'Bebeğiniz İçin En Eğlenceli Oyuncaklar',
            'Birbirinden Güzel Barbie Oyuncakları'
          ]"
        />

        <MoleculeFooterColumn
          title="Yaşa Göre Eğitici Oyuncaklar"
          :items="[
            'Fisher-Price','0 - 12 ay','1 - 2 yaş',
            '3 - 5 yaş','Eğitici Oyuncaklar'
          ]"
        />

        <MoleculeFooterColumn
          title="En Popüler Markalar"
          :items="[
            'Lego','Barbie','Lol Bebek','Cars','Hot Wheels',
            'Akülü Araçlar','Scooter','Kutu Oyunları','Ahşap Oyuncaklar'
          ]"
        />

        <MoleculeFooterColumn
          title="Hesabım"
          :items="[
            'Siparişlerim','Üyelik Bilgilerim','Çocuk Bilgilerim',
            'Adreslerim','Mesajlarım','Hediye Çeklerim','Şifre Değişikliği'
          ]"
        />

        <MoleculeFooterColumn
          title="Yardım"
          :items="[
            'Üyelik ve Sipariş İşlemleri','Sipariş ve Teslimat','Ödeme İşlemleri',
            'İndirim ve Promosyonlar','İade ve Değişim İşlemleri','İletişim',
            'Nasıl Bir Oyuncak Seçmeli?','Kişisel Verilerin Korunması',
            'Gizlilik Politikası','Yasal Uyarılar','İletişim Formu',
            'İnsan Kaynakları','Bilgi Toplumu Hizmetleri'
          ]"
        />

      </div>

      <!-- SAĞ KUTULAR -->
      <div class="side-boxes">
        <img :src="magazaHarita" class="box-img" />
        <img :src="toyzClup" class="box-img" />
        <img :src="karekod" class="qr-img" />
      </div>

    </div>

    <!-- ALT KISIM -->
    <div class="footer-bottom">

      <div class="customer">
        <span class="title">Müşteri Hizmetleri</span>
        <AtomIcon name="ri-phone-line" class="phone" />
        <span class="num">0216 499 1 999</span>
      </div>

      <div class="payment">
        <AtomIcon name="ri-shield-check-line" class="sh" />
        <span>Güvenli Ödeme Noktası</span>

        <img :src="masterCard" class="pay-icon" />
        <img :src="visa" class="pay-icon" />
        <img :src="troy" class="pay-icon" />
      </div>

      <MoleculeFooterSocial />

    </div>

    <div class="copy">
      © 2010-2025 Toypa Mağazacılık Tic. A.Ş. Tüm Hakları Saklıdır.
    </div>

  </div>
</template>

<script setup>
import MoleculeFooterColumn from "~/components/molecules/FooterColumn.vue";
import MoleculeFooterSocial from "~/components/molecules/FooterSocial.vue";
import AtomIcon from "~/components/atoms/Icon.vue";

// Asset Imports
const footerBanner = new URL("../../src/assets/images/footer1.png", import.meta.url).href
const magazaHarita = new URL("../../src/assets/images/magaza-harita.png", import.meta.url).href
const toyzClup = new URL("../../src/assets/images/toyz-clup.png", import.meta.url).href
const karekod = new URL("../../src/assets/images/karekod.png", import.meta.url).href
const masterCard = new URL("../../src/assets/images/master-card.png", import.meta.url).href
const visa = new URL("../../src/assets/images/visa.png", import.meta.url).href
const troy = new URL("../../src/assets/images/troy.png", import.meta.url).href

</script>

<style scoped>
.footer {
  width: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  box-sizing: border-box;
}

/* ÜST BANNER */
.app-banner img {
  width: 100%;
  border-radius: 20px;
}

/* ORTA ALAN: GRID + SAĞ KUTULAR */
.middle-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 60px;
  gap: 40px;
  box-sizing: border-box;
}

/* GRID */
.footer-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  column-gap: 80px;
}

/* SAĞ KUTULAR */
.side-boxes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.box-img {
  width: 260px;
  border-radius: 15px;
}

.qr-img {
  width: 120px; 
  align-self: center;
}


/* ALT KISIM */
.footer-bottom {
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  box-sizing: border-box;
}

.customer {
  display: flex;
  align-items: center;
  gap: 10px;
}
.customer .title { font-weight: 700; }
.customer .num { font-size: 20px; font-weight: 700; }

.payment {
  display: flex;
  align-items: center;
  gap: 12px;
}
.pay-icon { height: 28px; }

/* TELİF */
.copy {
  text-align: center;
  padding-bottom: 20px;
  color: #777;
  font-size: 14px;
}
</style>
