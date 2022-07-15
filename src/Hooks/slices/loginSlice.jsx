import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    username: "",
    password: "",
    state: "idle",
    error: ""
}
export const loginButtonHandler = createAsyncThunk("auth/loginButtonHandler", async ({ username, password }) => {
    const response = await axios.post("/api/auth/login", {
        username: username, password: password
    })
    localStorage.setItem("notico-token",response.data.encodedToken)
    localStorage.setItem("notico-details",response.data)
})
const signUpState = createSlice({
    name: "login",
    initialState,
    reducers: {
        setEmailHandler: (state, action) => {
            state.username = action.payload
        },
        setPasswordHandler: (state, action) => {
            state.password = action.payload
        }
    },
    extraReducers: {
        [loginButtonHandler.pending]: (state, action) => {
            state.state = "loading"
        },
        [loginButtonHandler.fulfilled]: (state, action) => {
            state.state = "fulfilled"
        },
        [loginButtonHandler.rejected]: (state, action) => {
            console.log(action.error)
            state.state = "rejected"
        }
    }
})
export const loginReducer = signUpState.reducer
export const loginActions = signUpState.actions