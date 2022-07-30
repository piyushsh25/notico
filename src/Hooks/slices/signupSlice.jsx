import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    state: "idle",
    error: ""
}
export const signupButtonHandler = createAsyncThunk("auth/signupButtonHandler", async ({ firstName, lastName, username, password }) => {
    username = username.split(" ").join("")
    const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        username,
        password,
        following: [],
        followers: [],
        bookmarks: [],
        userBio: [],
        img: "https://zevnon-react.netlify.app/static/media/main-img.9629d15c5937f344a761.png"
    })
    localStorage.setItem("notico-token", response.data.encodedToken)
    localStorage.setItem("notico-details", JSON.stringify(response.data))
})
const signupSlice = createSlice({
    name: "signup",
    initialState,
    reducers: {
        firstNameHandler: (state, action) => {
            state.firstName = action.payload
        },
        lastNameHandler: (state, action) => {
            state.lastName = action.payload
        },
        usernameHandler: (state, action) => {
            state.username = action.payload
        },
        passwordHandler: (state, action) => {
            state.password = action.payload
        },
        setStateIdleHandler: (state, action) => {
            state.state = "idle"
        }
    },
    extraReducers: {
        [signupButtonHandler.pending]: (state, action) => {
            state.state = "loading"

        },
        [signupButtonHandler.fulfilled]: (state, action) => {
            state.state = "fulfilled"
        },
        [signupButtonHandler.rejected]: (state, action) => {
            state.state = "rejected"
        },

    }
})
export const signUpReducers = signupSlice.reducer
export const signUpActions = signupSlice.actions