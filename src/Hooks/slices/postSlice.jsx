import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
    posts: [],
    error: null,
    // this is for get posts
    state: "idle",
    createPost: "",
    createPostStatus: "idle",
    likeState: "idle",
    dislikeState: "idle"
}
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const { data } = await axios.get("/api/posts")
    return data.posts
})

export const createPostHandler = createAsyncThunk("/createPostHandler", async (content) => {

    const getPosts = await axios.post("/api/posts",
        { content },
        { headers: { authorization: localStorage.getItem("notico-token") } })
    return getPosts.data.posts
})

export const likePostHandler = createAsyncThunk("like/likePostHandler", async (post) => {
    const encodedToken = localStorage.getItem("notico-token")
    const { _id: postId } = post
    const likePostResponse = await axios.post(`/api/posts/like/${postId}`, {},
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return likePostResponse.data.posts
})
export const disLikePostHandler = createAsyncThunk("dislike/disLikePostHandler", async (post) => {
    const encodedToken = localStorage.getItem("notico-token")
    const { _id: postId } = post
    const dislikePostResponse = await axios.post(`/api/posts/dislike/${postId}`, {},
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return dislikePostResponse.data.posts

})
const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        onInputHandler: (state, action) => {
            state.createPost = action.payload
        },
        setGetPostIdle: (state, action) => {
            state.state = "idle"
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
            state.createPost = ""
        },
        [createPostHandler.rejected]: (state, action) => {
            state.createPostStatus = "rejected"
        },
        [likePostHandler.pending]: (state, action) => {
            // to reload and render updated post, state is set to idle
            state.state = "idle"
            state.likeState = "loading"
        },
        [likePostHandler.fulfilled]: (state, action) => {
            state.likeState = "successful"
            state.post = action.payload
        },
        [likePostHandler.rejected]: (state, action) => {
            state.likeState = "error"
        },
        [disLikePostHandler.pending]: (state, action) => {
            // to reload and render updated post, state is set to idle
            state.state = "idle"
            state.likeState = "loading"
        },
        [disLikePostHandler.fulfilled]: (state, action) => {
            state.likeState = "successful"
            state.post = action.payload
        },
        [disLikePostHandler.rejected]: (state, action) => {
            state.likeState = "error"
        },
    }
})
export const postReducer = postSlice.reducer
export const postAction = postSlice.actions