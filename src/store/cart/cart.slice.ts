import { createSlice } from '@reduxjs/toolkit'
import { getStoreLocal } from '../../utils/local-storage'
import { IInitialState } from './cart.interface'

import { addToCart, deleteFromCart } from './cart.actions'

const initialState: IInitialState = {
	isLoading: false,
	cars: getStoreLocal('cart'),
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addToCart.pending, (state) => {
				state.isLoading = true
			})
			.addCase(addToCart.fulfilled, (state, { payload }) => {
				state.isLoading = false
				//@ts-ignore
				state.cars.push(payload.id)
			})
			.addCase(addToCart.rejected, (state) => {
				state.isLoading = false
				state.cars = []
			})
			.addCase(deleteFromCart.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteFromCart.fulfilled, (state, { payload }) => {
				state.isLoading = false
				//@ts-ignore
				state.cars.filter((id) => id !== payload.id)
			})
			.addCase(deleteFromCart.rejected, (state) => {
				state.isLoading = false
			})
	},
})

export const { reducer } = cartSlice
