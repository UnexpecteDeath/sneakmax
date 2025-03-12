import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types/typeState";



const initialState: CartState = {
    data_cart: [],
    status_order: "payment",
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
        },
        resetDataCart: (state) => {
            state.order_number = crypto.randomUUID();
            state.data_cart = []
        }
    }
})


export const { addProduct, deleteProduct, resetDataCart } = CartSlice.actions