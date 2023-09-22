import { combineReducers } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'

export const reducers = combineReducers({
	cart: cartReducer,
})
