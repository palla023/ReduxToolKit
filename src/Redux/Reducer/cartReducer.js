import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	cartValues: [],
	totalPrice: 0
}
const cartReducer = createSlice(
	{
		name: "cartReducer",      //nirs
		initialState,
		reducers: {
			//action creators
			incrementcart: (state, action) => {
				//Cart value Increment
				state.cartValues.push(action.payload)  //we are pushing the data | action will have type & Payload | payload will have value
				//cart Price increment
				const priceArray = state.cartValues.map(obj => obj.ProductPrice)
				state.totalPrice = priceArray.reduce((a, b) => a + b)
			},
			decrementcart: (state, action) => {
				const index = state.cartValues.findIndex(obj => obj.ProductName === action.payload.ProductName)
				if (index > -1) {
					state.cartValues.splice(index, 1)   //beacuse when we are removing, it will try to delete some other element
				}

				const priceArray = state.cartValues.map(obj => obj.ProductPrice)
				state.totalPrice = priceArray.reduce((a, b) => a + b)
			}
		}
	}
)
//export the action creators by using reducername.actions
export const { incrementcart, decrementcart } = cartReducer.actions
export default cartReducer.reducer      //Edf
