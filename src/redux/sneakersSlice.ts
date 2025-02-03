import { createSlice } from "@reduxjs/toolkit";
import { SneakersState } from "../types/typeState";
import { getSneakers } from "../api/products";
import { Sneaker } from "../types";


const initialState:  SneakersState = {
    data: [],
    status: '',
    totalPages: 0,
    currentPage: 1,
}


export const sneakersSlice =  createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        incCurrentPages: (state, action) => {
            state.currentPage = action.payload;
        },
        resetData: (state) => {
            state.data = [];
            state.currentPage = 1;
        }
    },
    extraReducers: (builder) =>  {
        builder.addCase(getSneakers.pending, (state) => {
            state.status  = "pending";
        }),
        builder.addCase(getSneakers.fulfilled, (state, {  payload }) => {
            state.status = "fulfilled";
            state.data = [...state.data, ...payload.items.filter((item: Sneaker) => !state.data.some((sneakers) => sneakers.id === item.id))];
            state.totalPages = payload.meta.total_pages;
            state.currentPage = payload.meta.current_page;
        }),
        builder.addCase(getSneakers.rejected, (state) => {
            state.status = "rejected";
        })
    }
})

export const { incCurrentPages, resetData } = sneakersSlice.actions