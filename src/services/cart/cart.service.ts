import { deleteFromStorage, saveToStorage } from './cart.helper'

export const CartService = {
	async addToCart(id: number) {
		saveToStorage(id)

		return { id }
	},

	async deleteFromCart(id: number) {
		deleteFromStorage(id)

		return { id }
	},
}
