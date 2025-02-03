import { createAsyncThunk } from "@reduxjs/toolkit";
import { initial } from "./initial";


export const getSneaker = createAsyncThunk('sneaker', async (id: string) => {
    try {
        const data = initial.get(`sneakers/${id}`);
        return (await data).data;
    } catch (error) {
        console.error(error)
    }
})