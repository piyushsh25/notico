import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    state: "idle",
    error: null
}
export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const  response  = await axios.get("/api/users")
    return response.data.users
})
const userSlice = createSlice({
    name: "getUsers",
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.state = "loading"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.state = "failed"
            state.error = action.error
        },


    }
})
export const userReducer = userSlice.reducer