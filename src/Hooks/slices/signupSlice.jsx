import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    password: ""
}
export const signupButtonHandler = createAsyncThunk("auth/signupButtonHandler", async ({ firstName, lastName, username, password }) => {
    console.log(firstName, lastName, username, password)
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
    console.log(response)
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
        }
    },
    extraReducers: {

    }
})
export const signUpReducers = signupSlice.reducer
export const signUpActions = signupSlice.actions