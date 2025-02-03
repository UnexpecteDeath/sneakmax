import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types/typeState";



const initialState: CartState = {
    data_cart: [],
    status_order: "created",
    order_number: crypto.randomUUID(),
}


export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.data_cart = [ action.payload, ...state.data_cart];
        },
        deleteProduct: (state, action) => {
            state.data_cart = [...state.data_cart].filter((item) => item.productId !== action.payload)
        }
    }
})


export const { addProduct, deleteProduct } = CartSlice.actions