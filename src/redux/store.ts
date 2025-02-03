import { configureStore } from "@reduxjs/toolkit";
import { sneakersSlice } from "./sneakersSlice";
import { useDispatch } from "react-redux";
import { sneakerSlice } from "./sneakerSlice";
import { teamSlice } from "./teamSlice";
import { CartSlice } from "./cartSlice";
import { filterSlice } from "./filterSlice";


export const store =  configureStore({
    reducer: {
        sneakers: sneakersSlice.reducer,
        sneaker: sneakerSlice.reducer,
        team: teamSlice.reducer,
        cart: CartSlice.reducer,
        filter: filterSlice.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();