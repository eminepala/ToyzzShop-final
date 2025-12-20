import { defineStore } from 'pinia'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import type { ICategory } from '~/types'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [] as ICategory[],
        loading: false,
        error: null as string | null
    }),
    actions: {
        async fetchCategories() {
            this.loading = true
            try {
                const querySnapshot = await getDocs(collection(db, 'categories'))
                this.categories = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ICategory))
            } catch (e: any) {
                this.error = e.message
            } finally {
                this.loading = false
            }
        }
    }
})
