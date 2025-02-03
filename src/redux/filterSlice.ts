import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    price: "",
    gender: "",
    sizes: "",
}

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setSizes: (state, action) => {
            state.sizes = action.payload;
        },
        resetFilters: (state) => {
            state.price = '';
            state.gender = '';
            state.sizes = '';
        }
    }
})


export const { setPrice, setGender, setSizes, resetFilters } = filterSlice.actions