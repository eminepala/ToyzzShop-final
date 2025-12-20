<template>
  <NuxtLayout name="admin">
    <div class="admin-products-page">
      
      <!-- Top Bar -->
      <div class="top-bar">
        <h2 class="page-title">Ürün Yönetimi</h2>
        <button class="add-btn" @click="showAddModal = !showAddModal">
           <i class="ri-add-line mr-2"></i> Yeni Ürün Ekle
        </button>
      </div>

      <!-- Add Product Panel -->
      <transition name="slide-fade">
        <div v-if="showAddModal" class="add-product-panel">
          <div class="panel-header">
            <h3>{{ isEditing ? 'Ürün Düzenle' : 'Yeni Ürün Bilgileri' }}</h3>
            <button class="close-btn" @click="closeModal"><i class="ri-close-line"></i></button>
          </div>
          
          <form @submit.prevent="handleAddProduct" class="product-form">
               <div class="form-grid">
                  <div class="form-group">
                    <label>Ürün Adı</label>
                    <input type="text" v-model="newProduct.name" required placeholder="Örn: Lego Seti" />
                  </div>
                  
                  <div class="form-group">
                    <label>Fiyat (TL)</label>
                    <input type="number" v-model.number="newProduct.price" required placeholder="0.00" />
                  </div>

                  <div class="form-group">
                    <label>Kategori</label>
                    <div class="select-wrapper">
                        <select v-model="newProduct.categoryId">
                            <option value="" disabled>Kategori Seçiniz</option>
                            <option v-for="cat in categoryStore.categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                        </select>
                        <i class="ri-arrow-down-s-line arrow-icon"></i>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Görsel Yolu</label>
                    <input type="text" v-model="newProduct.imageUrl" placeholder="Görsel Yolu" />
                  </div>
               </div>
               
               <div class="form-group full-width">
                  <label>Açıklama</label>
                  <textarea v-model="newProduct.description" rows="3" placeholder="Ürün özelliklerini giriniz..."></textarea>
               </div>

               <div class="form-actions">
                 <button type="button" class="cancel-btn" @click="closeModal">İptal</button>
                 <button type="submit" class="save-btn" :disabled="loading">
                    <i v-if="loading" class="ri-loader-4-line spin mr-2"></i>
                    {{ loading ? (isEditing ? 'Güncelleniyor...' : 'Kaydediliyor...') : (isEditing ? 'Güncelle' : 'Kaydet') }}
                 </button>
               </div>
          </form>
        </div>
      </transition>

      <!-- Product List Table -->
      <div class="table-container">
        <table class="product-table">
          <thead>
            <tr>
              <th width="80">Görsel</th>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Kategori</th>
              <th class="text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in productStore.products" :key="product.id">
              <td>
                <div class="img-thumb">
                    <img :src="product.imageUrl || 'https://via.placeholder.com/150'" alt="product" />
                </div>
              </td>
              <td>
                <div class="product-name-text">{{ product.name }}</div>
              </td>
              <td>
                <div class="price-badge">{{ product.price }} TL</div>
              </td>
              <td>
                  <span class="category-badge">
                   {{ categoryStore.categories.find(c => c.id === product.categoryId)?.name || 'Genel' }}
                  </span>
              </td>
              <td class="text-right">
                <button @click="handleEdit(product)" class="action-btn edit mr-2" title="Düzenle">
                    <i class="ri-pencil-line"></i>
                </button>
                <button @click="handleDelete(product.id!)" class="action-btn delete" title="Sil">
                    <i class="ri-delete-bin-line"></i>
                </button>
              </td>
            </tr>
             <tr v-if="productStore.products.length === 0">
                <td colspan="5" class="empty-state">
                    <i class="ri-inbox-line"></i>
                    <p>Henüz ürün eklenmemiş.</p>
                </td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'
import { useCategoryStore } from '~/stores/categoryStore'
import type { IProduct } from '~/types'

definePageMeta({
    layout: 'admin'
})

const productStore = useProductStore()
const categoryStore = useCategoryStore()
const showAddModal = ref(false)
const loading = ref(false)
const isEditing = ref(false)
const editingId = ref<string | null>(null)

const newProduct = ref<IProduct>({
    name: '',
    price: 0,
    description: '',
    imageUrl: '',
    categoryId: '',
    stock: 10
})

onMounted(async () => {
    await Promise.all([
        productStore.fetchProducts(),
        categoryStore.fetchCategories()
    ])
})

const handleAddProduct = async () => {
    loading.value = true
    try {
        if (isEditing.value && editingId.value) {
             await productStore.updateProduct(editingId.value, newProduct.value)
             alert('Ürün başarıyla güncellendi!')
        } else {
             await productStore.addProduct(newProduct.value)
             alert('Ürün başarıyla eklendi!')
        }
        
        closeModal()
    } catch (error) {
        console.error(error)
        alert('Bir hata oluştu.')
    } finally {
        loading.value = false
    }
}

const handleEdit = (product: IProduct) => {
    isEditing.value = true
    editingId.value = product.id || null
    newProduct.value = { ...product }
    showAddModal.value = true
}

const handleDelete = async (id: string) => {
    if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
        await productStore.deleteProduct(id)
    }
}

const closeModal = () => {
    showAddModal.value = false
    isEditing.value = false
    editingId.value = null
    newProduct.value = {
        name: '',
        price: 0,
        description: '',
        imageUrl: '',
        categoryId: '',
        stock: 10
    }
}
</script>

<style scoped>
.admin-products-page {
  padding: 20px;
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
}

/* Top Bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
}

.add-btn {
  background-color: #ff9f00;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}

.add-btn:hover {
  background-color: #e68a00;
}

/* Add Panel */
.add-product-panel {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 15px;
}

.panel-header h3 {
  font-size: 18px;
  font-weight: 600;
  color: #374151;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 20px;
  color: #9ca3af;
  cursor: pointer;
}

.close-btn:hover {
    color: #ef4444;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #ff9f00;
  box-shadow: 0 0 0 3px rgba(255, 159, 0, 0.1);
}

.select-wrapper {
    position: relative;
}
.arrow-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #6b7280;
}
.select-wrapper select {
    appearance: none;
    -webkit-appearance: none;
}


.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.cancel-btn {
  padding: 10px 20px;
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  color: #374151;
  font-weight: 500;
  cursor: pointer;
}
.cancel-btn:hover {
    background: #f9fafb;
}

.save-btn {
  padding: 10px 24px;
  background: #10b981;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.save-btn:hover {
    background: #059669;
}

/* Table */
.table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th {
  background: #f9fafb;
  padding: 16px;
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
}

.product-table td {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.product-table tbody tr:last-child td {
  border-bottom: none;
}

.product-table tbody tr:hover {
  background-color: #ffffba; /* Subtle yellow highlight similar to brand */
}

.img-thumb img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #eee;
}

.product-name-text {
  font-weight: 600;
  color: #111827;
  font-size: 15px;
}

.price-badge {
  font-weight: 700;
  color: #059669;
}

.category-badge {
  display: inline-block;
  padding: 4px 10px;
  background: #eff6ff;
  color: #3b82f6;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.2s;
}

.action-btn.edit {
  color: #3b82f6;
}
.action-btn.edit:hover {
  background: #eff6ff;
}

.action-btn.delete {
    color: #ef4444;
}
.action-btn.delete:hover {
    background: #fee2e2;
}

.empty-state {
    text-align: center;
    padding: 60px 0 !important;
    color: #9ca3af;
}
.empty-state i {
    font-size: 48px;
    margin-bottom: 10px;
    display: block;
}

/* Transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Utils */
.spin {
    animation: spin 1s linear infinite;
}
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
</style>
