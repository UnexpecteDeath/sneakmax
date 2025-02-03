import { createAsyncThunk } from "@reduxjs/toolkit";
import { initial } from "./initial";

export const getTeam = createAsyncThunk('team', async () => {
    try {
        const data = initial.get(`team`);
        return (await data).data;
    } catch (error) {
        console.error(error)
    }
})
