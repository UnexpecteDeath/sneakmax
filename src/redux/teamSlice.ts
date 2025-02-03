import { createSlice } from "@reduxjs/toolkit";
import { getTeam } from "../api/team";
import { TeamState } from "../types/typeState";


const initialState: TeamState = {
    data: [],
    status: '',
}


export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {},
    extraReducers: (builder) =>  {
        builder.addCase(getTeam.pending, (state) => {
            state.status  = "pending"
        }),
        builder.addCase(getTeam.fulfilled, (state, action) => {
            state.status = "fulfilled",
            state.data = action.payload;
        }),
        builder.addCase(getTeam.rejected, (state) => {
            state.status = "rejected"
        })
    }
})
