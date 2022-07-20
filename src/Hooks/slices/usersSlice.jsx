import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    state: "idle",
    error: null,
    loggedUserState: "idle",
    loggedUserDetails: null,
}
export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await axios.get("/api/users")
    return response.data.users
})
export const getLoggedUserDetails = createAsyncThunk("users/getLoggedUserDetails", async (username) => {
    const response = await axios.get(`/api/users/${username}`)
    return response.data.user
})

const userSlice = createSlice({
    name: "getUsers",
    initialState,
    reducers: {
        setGetUserIdle: (state, action) => {
            state.state = "idle"
        },
        setGetLoggedUserIdle: (state, action) => {
            state.loggedUserState = "idle"
        },

    },
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
        [getLoggedUserDetails.pending]: (state, action) => {
            state.state = "loading"
        },
        [getLoggedUserDetails.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            state.loggedUserDetails = action.payload

        },
        [getLoggedUserDetails.rejected]: (state, action) => {
            state.state = "failed"
        },
    }
})
export const userReducer = userSlice.reducer
export const userAction = userSlice.actions