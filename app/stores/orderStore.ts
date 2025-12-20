import { defineStore } from 'pinia'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'
import type { IOrder, ICartItem } from '~/types'

export const useOrderStore = defineStore('order', {
    state: () => ({
        loading: false,
        error: null as string | null
    }),
    actions: {
        async createOrder(userId: string, items: ICartItem[], total: number) {
            this.loading = true
            this.error = null
            try {
                const order: IOrder = {
                    userId,
                    items,
                    total,
                    createdAt: new Date(),
                    status: 'pending'
                }
                await addDoc(collection(db, 'orders'), order)
            } catch (e: any) {
                this.error = e.message
                throw e
            } finally {
                this.loading = false
            }
        }
    }
})
