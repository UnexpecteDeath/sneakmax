import { createAsyncThunk } from "@reduxjs/toolkit";
import { initial } from "./initial";


export const getSneakers = createAsyncThunk('sneakers', async ({ page, parameters }: { page: number; parameters: string }) => {
    try {
        const data = initial.get(`sneakers?page=${page}&limit=6${parameters}&_select=id,inStock,imgUrl,price,title`);
        return (await data).data;
    } catch (error) {
        console.error(error)
    }
})
