import { deleteFromStorage, saveToStorage } from './cart.helper'

export const CartService = {
	addToCart(id: number) {
		saveToStorage(id)

		return { id }
	},

	deleteFromCart(id: number) {
		deleteFromStorage(id)

		return { id }
	},
}
