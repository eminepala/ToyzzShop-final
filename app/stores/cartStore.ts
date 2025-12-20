import { defineStore } from 'pinia'
import type { ICartItem, IProduct } from '~/types'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as ICartItem[]
    }),
    getters: {
        totalPrice: (state) => state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0),
        itemCount: (state) => state.items.reduce((count, item) => count + item.quantity, 0)
    },
    actions: {
        addToCart(product: IProduct) {
            const existing = this.items.find(i => i.product.id === product.id)
            if (existing) {
                existing.quantity++
            } else {
                this.items.push({ product, quantity: 1 })
            }
        },
        removeFromCart(product: IProduct) {
            this.items = this.items.filter(i => i.product.id !== product.id)
        },
        removeItem(item: ICartItem) {
            const index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        },
        clearCart() {
            this.items = []
        }
    }
})
