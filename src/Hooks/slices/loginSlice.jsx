import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    username: "",
    password: "",
    state: "idle",
    error: "",
    userDetails:""
}
export const loginButtonHandler = createAsyncThunk("auth/loginButtonHandler", async ({ username, password }) => {
    const response = await axios.post("/api/auth/login", {
        username: username, password: password
    })
    localStorage.setItem("notico-token",response.data.encodedToken)
    localStorage.setItem("notico-details",JSON.stringify(response.data))
    return response.data
})

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setEmailHandler: (state, action) => {
            state.username = action.payload
        },
        setPasswordHandler: (state, action) => {
            state.password = action.payload
        },
        setStateIdleHandler:(state,action)=>{
            state.state="idle"
        }
    },
    extraReducers: {
        [loginButtonHandler.pending]: (state, action) => {
            state.state = "loading"
        },
        [loginButtonHandler.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            // state.state="idle"
        },
        [loginButtonHandler.rejected]: (state, action) => {
            state.state = "rejected"
        },
       

    }
})
export const loginReducer = loginSlice.reducer
export const loginActions = loginSlice.actions