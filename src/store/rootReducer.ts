import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './cart-slice/cartSlice'

export const rootReducer = combineReducers({
	cart: cartReducer,
})
