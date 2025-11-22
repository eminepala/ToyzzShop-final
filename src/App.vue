<template>
  <div class="layout">

    <!-- Sol Menü -->
    <aside class="sidebar">
      <h2>Organizmalar</h2>

      <ul>
        <li
          v-for="(comp, name) in components"
          :key="name"
          @click="active = name"
          :class="{ active: active === name }"
        >
          {{ name }}
        </li>
      </ul>
    </aside>

    <!-- Sağ Tarafta Bileşen Gösterimi -->
    <main class="content">
      <component :is="components[active]" />
    </main>

  </div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'
import GirisYap from './components/organisms/GirisYap.vue'
import KayitOl from './components/organisms/KayitOl.vue'
import UrunSayfasi from './components/organisms/UrunSayfasi.vue'
import Sepet from './components/organisms/Sepet.vue'
import Slider from './components/organisms/Slider.vue'
import SliderAlt from './components/organisms/SliderAlt.vue'
import Bildirimler from './components/organisms/Bildirimler.vue'
import Anasayfa from './components/organisms/Anasayfa.vue'

export default {
  data() {
    return {
      active: "Header", // ilk gösterilecek organizma
      components: {
        Header,
        Footer,
        GirisYap,
        KayitOl,
        UrunSayfasi,
        Sepet,
        Slider,
        SliderAlt,
        Bildirimler,
        Anasayfa,
      }
    }
  }
}
</script>

<style>
.layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 240px;
  background: #f1f1f1;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.sidebar li.active {
  background: #dceeff;
  font-weight: bold;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden !important;
  width: 100%;
  max-width: 100%;
}

* {
  font-family: 'Montserrat', sans-serif;
}
html, body, #app {
  overflow-x: hidden !important;
  width: 100%;
  max-width: 100%;
}


</style>
