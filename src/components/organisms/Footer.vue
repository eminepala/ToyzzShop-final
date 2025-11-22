<template>
  <div class="footer">

    <!-- ÜST SARI BANNER -->
    <div class="app-banner">
      <img src="@/assets/images/footer1.png" class="banner-img" />
    </div>

    <!-- ORTA BÖLGE: SOL GRID + SAĞ KUTULAR -->
    <div class="middle-area">

      <!-- SOL GRID (6 kolon) -->
      <div class="footer-grid">

        <FooterColumn
          title="Kategoriler"
          :items="[
            'Oyuncaklar','Araçlar','Anne Bebek','Kırtasiye Ve Okul',
            'Karakterler','Fırsatlar','Pet Shop'
          ]"
        />

        <FooterColumn
          title="Özel Sayfalar"
          :items="[
            'Tüm Kampanyalar','Fırsatlar','Kasım Ayının En Popüler Oyuncağı',
            'En Sevilen 50 Oyuncak','Yetişkinler İçin LEGO Setleri',
            'Bebeğiniz İçin En Eğlenceli Oyuncaklar',
            'Birbirinden Güzel Barbie Oyuncakları'
          ]"
        />

        <FooterColumn
          title="Yaşa Göre Eğitici Oyuncaklar"
          :items="[
            'Fisher-Price','0 - 12 ay','1 - 2 yaş',
            '3 - 5 yaş','Eğitici Oyuncaklar'
          ]"
        />

        <FooterColumn
          title="En Popüler Markalar"
          :items="[
            'Lego','Barbie','Lol Bebek','Cars','Hot Wheels',
            'Akülü Araçlar','Scooter','Kutu Oyunları','Ahşap Oyuncaklar'
          ]"
        />

        <FooterColumn
          title="Hesabım"
          :items="[
            'Siparişlerim','Üyelik Bilgilerim','Çocuk Bilgilerim',
            'Adreslerim','Mesajlarım','Hediye Çeklerim','Şifre Değişikliği'
          ]"
        />

        <FooterColumn
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
        <img src="@/assets/images/magaza-harita.png" class="box-img" />
        <img src="@/assets/images/toyz-clup.png" class="box-img" />
        <img src="@/assets/images/karekod.png" class="qr-img" />
      </div>

    </div>

    <!-- ALT KISIM -->
    <div class="footer-bottom">

      <div class="customer">
        <span class="title">Müşteri Hizmetleri</span>
        <Icon name="ri-phone-line" class="phone" />
        <span class="num">0216 499 1 999</span>
      </div>

      <div class="payment">
        <Icon name="ri-shield-check-line" class="sh" />
        <span>Güvenli Ödeme Noktası</span>

        <img src="@/assets/images/master-card.png" class="pay-icon" />
        <img src="@/assets/images/visa.png" class="pay-icon" />
        <img src="@/assets/images/troy.png" class="pay-icon" />
      </div>

      <FooterSocial />

    </div>

    <div class="copy">
      © 2010-2025 Toypa Mağazacılık Tic. A.Ş. Tüm Hakları Saklıdır.
    </div>

  </div>
</template>

<script setup>
import FooterColumn from "@/components/molecules/FooterColumn.vue";
import FooterSocial from "@/components/molecules/FooterSocial.vue";
import Icon from "@/components/atoms/Icon.vue";
</script>

<style scoped>
.footer {
  width: 100%;
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  gap: 40px;
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

/* ALT KISIM */
.footer-bottom {
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
