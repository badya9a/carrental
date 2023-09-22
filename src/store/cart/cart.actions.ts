import { createAsyncThunk } from '@reduxjs/toolkit'

import { CartService } from '../../services/cart/cart.service'

export const addToCart = createAsyncThunk<{ id: number }, { id: number }>(
	'/cart',
	async ({ id }, thunkApi) => {
		try {
			const response = await CartService.addToCart(id)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const deleteFromCart = createAsyncThunk<{ id: number }, { id: number }>(
	'/cart-delete',
	async ({ id }, thunkApi) => {
		try {
			const response = await CartService.deleteFromCart(id)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
