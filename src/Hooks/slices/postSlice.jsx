import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    posts: [],
    error: null,
    state: "idle",
    createPost: "",
    createPostStatus: "idle"
}
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const { data } = await axios.get("/api/posts")
    return data.posts
})
export const createPostHandler = createAsyncThunk("/createPostHandler", async (content) => {

    const getPosts = await axios.post("/api/posts",
        { content },
        { headers: { authorization: localStorage.getItem("notico-token") } })
    console.log(getPosts)
    return getPosts.data.posts
})
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        onInputHandler: (state, action) => {
            console.log(action.payload)
            state.createPost = action.payload
        }
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.state = "loading"
        },
        [getPosts.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            state.posts = action.payload
        },
        [getPosts.rejected]: (state, action) => {
            state.state = "error"
            state.error = action.error
        },
        [createPostHandler.pending]: (state, action) => {
            state.createPostStatus = "loading"
        },
        [createPostHandler.fulfilled]: (state, action) => {
            state.createPostStatus = "fulfilled"
            state.posts = action.payload
            state.createPost=""
        },
        [createPostHandler.rejected]: (state, action) => {
            state.createPostStatus = "rejected"
            console.log("error")

        },
    }
})
export const postReducer = postSlice.reducer
export const postAction = postSlice.actions