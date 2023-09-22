import { getStoreLocal } from '../../utils/local-storage'

export const saveToStorage = (id: number) => {
	localStorage.setItem(
		'cart',
		JSON.stringify(
			getStoreLocal('cart')
				? getStoreLocal('cart').includes(id)
					? getStoreLocal('cart')
					: [...getStoreLocal('cart'), id]
				: [id]
		)
	)
}

export const deleteFromStorage = (id: number) => {
	localStorage.setItem(
		'cart',
		JSON.stringify(
			getStoreLocal('cart').filter((carId: number) => carId !== id)
		)
	)
}
