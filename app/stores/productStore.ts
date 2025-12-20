import { defineStore } from 'pinia'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import type { IProduct } from '~/types'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as IProduct[],
        loading: false,
        error: null as string | null
    }),
    actions: {
        async fetchProducts() {
            this.loading = true
            try {
                const querySnapshot = await getDocs(collection(db, 'products'))
                this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as IProduct))
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
        async addProduct(product: IProduct) {
            this.loading = true
            try {
                const docRef = await addDoc(collection(db, 'products'), product)
                this.products.push({ ...product, id: docRef.id })
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
        async updateProduct(id: string, product: Partial<IProduct>) {
            this.loading = true
            try {
                const productRef = doc(db, 'products', id)
                await updateDoc(productRef, product)
                const index = this.products.findIndex(p => p.id === id)
                if (index !== -1) {
                    this.products[index] = { ...this.products[index], ...product } as IProduct
                }
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        },
        async deleteProduct(id: string) {
            this.loading = true
            try {
                const productRef = doc(db, 'products', id)
                await deleteDoc(productRef)
                this.products = this.products.filter(p => p.id !== id)
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        }
    }
})
