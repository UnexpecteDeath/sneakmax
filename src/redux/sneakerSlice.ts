import { createSlice } from "@reduxjs/toolkit";
import { SneakerState } from "../types/typeState";
import { getSneaker } from "../api/product";


const initialState: SneakerState = {
    data: null,
    status: '',
}


export const sneakerSlice =  createSlice({
    name: "sneaker",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder.addCase(getSneaker.pending, (state) => {
            state.status  = "pending"
        }),
        builder.addCase(getSneaker.fulfilled, (state, action) => {
            state.status = "fulfilled",
            state.data = action.payload
        }),
        builder.addCase(getSneaker.rejected,  (state) => {
            state.status = "rejected"
        })
    }
})
