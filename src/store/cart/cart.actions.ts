import { createAsyncThunk } from '@reduxjs/toolkit'

export const addToCart = createAsyncThunk<{ id: number }, { id: number }>(
	'/cart',
	({ id }, thunkApi) => {
		try {
			return { id }
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const deleteFromCart = createAsyncThunk<{ id: number }, { id: number }>(
	'/cart-delete',
	({ id }, thunkApi) => {
		try {
			return { id }
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
