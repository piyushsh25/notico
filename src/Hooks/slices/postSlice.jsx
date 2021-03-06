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
    dislikeState: "idle",
    singlePostState: "idle",
    singlePostDetails: null,
    postCommentState: "idle",
    commentDasta: "",
    postBookmarkState: "idle",
    deleteBookmarkState: "idle",
    getBookmarkState: "idle",
    bookmarks: [],
    showCommentPage: false,
    showEditModal: false,
    postToEdit: null,
    editPostState: "idle"
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
export const deletePostHandler = createAsyncThunk("delete/deletePostHandler", async (post) => {
    const encodedToken = localStorage.getItem("notico-token")
    const postId = post._id
    const deletedPostResponse = await axios.delete(`/api/posts/${postId}`,
        {
            headers: { authorization: encodedToken }
        })
    return deletedPostResponse.data.posts

})
export const getIndividualPost = createAsyncThunk("post/getIndividualPost", async (post) => {
    const postId = post._id
    const getIndividualPost = await axios.get(`/api/posts/${postId}`)
    return getIndividualPost.data.post

})
export const postCommentHandler = createAsyncThunk("post/postCommentHandler", async ({ singlePostDetails, commentData: text }) => {
    const encodedToken = localStorage.getItem("notico-token")
    const postId = singlePostDetails._id
    const postComment = await axios.post(`/api/comments/add/${postId}`,
        { text },
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return postComment.data.comments

})
export const postBookmarksHandler = createAsyncThunk("post/postBookmarksHandler", async (post) => {
    const postId = post._id
    const encodedToken = localStorage.getItem("notico-token")
    const postBookMark = await axios.post(`/api/users/bookmark/${postId}`,
        {},
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return postBookMark.data.bookmarks
})
export const deleteBookmarksHandler = createAsyncThunk("post/deleteBookmarksHandler", async (post) => {
    const postId = post._id
    const encodedToken = localStorage.getItem("notico-token")
    const postRemoveBookMark = await axios.post(`/api/users/remove-bookmark/${postId}`,
        {},
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return postRemoveBookMark.data.bookmarks
})
export const getBookmarksHandler = createAsyncThunk("post/getBookmarksHandler", async () => {
    const encodedToken = localStorage.getItem("notico-token")
    const getBookmarkResponse = await axios.get(`/api/users/bookmark`,
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return getBookmarkResponse.data.bookmarks
})
export const editCommentHandler = createAsyncThunk("post/editPostHandler", async ({ postId, postContent: content }) => {
    const encodedToken = localStorage.getItem("notico-token")
    const editCommentResponse = await axios.post(`/api/posts/edit/${postId}`,
        { content },
        {
            headers: {
                authorization: encodedToken
            }
        }
    )
    return editCommentResponse.data.posts
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
        },
        setCommentHandler: (state, action) => {
            state.commentData = action.payload
        },
        setCommentPageHandler: (state, action) => {
            state.showCommentPage = action.payload
        },
        setEditModalHandler: (state, action) => {
            const { setTrue, post } = action.payload
            state.showEditModal = setTrue
            state.postToEdit = post
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
        [deletePostHandler.pending]: (state, action) => {
            // to reload and render updated post, state is set to idle
            state.state = "idle"
            state.state = "loading"
        },
        [deletePostHandler.fulfilled]: (state, action) => {
            state.state = "successful"
            state.posts = action.payload
        },
        [deletePostHandler.rejected]: (state, action) => {
            state.state = "error"
        },
        [getIndividualPost.pending]: (state, action) => {
            state.singlePostState = "loading"
        },
        [getIndividualPost.fulfilled]: (state, action) => {
            state.singlePostState = "fulfilled"
            state.singlePostDetails = action.payload
        },
        [getIndividualPost.rejected]: (state, action) => {
            state.singlePostDetails = "rejected"
        },
        [postCommentHandler.pending]: (state, action) => {
            state.postCommentState = "loading"
        },
        [postCommentHandler.fulfilled]: (state, action) => {
            state.postCommentState = "fulfilled"
            state.commentData = ""
        },
        [postCommentHandler.rejected]: (state, action) => {
            state.postCommentState = "rejected"
        },
        [postBookmarksHandler.pending]: (state, action) => {
            state.postBookmarkState = "loading"
        },
        [postBookmarksHandler.fulfilled]: (state, action) => {
            state.postBookmarkState = "fulfilled"
            state.bookmarks = action.payload
        },
        [postBookmarksHandler.rejected]: (state, action) => {
            state.postBookmarkState = "rejected"
        },
        [deleteBookmarksHandler.pending]: (state, action) => {
            state.deleteBookmarkState = "loading"
        },
        [deleteBookmarksHandler.fulfilled]: (state, action) => {
            state.deleteBookmarkState = "fulfilled"
            state.bookmarks = action.payload
        },
        [deleteBookmarksHandler.rejected]: (state, action) => {
            state.deleteBookmarkState = "rejected"
        },
        [getBookmarksHandler.pending]: (state, action) => {
            state.getBookmarkState = "loading"
        },
        [getBookmarksHandler.fulfilled]: (state, action) => {
            state.getBookmarkState = "fulfilled"
            state.bookmarks = action.payload
            state.bookmarks.filter((bookmark) => {
                return bookmark === state.post
            })
        },
        [getBookmarksHandler.rejected]: (state, action) => {
            state.getBookmarkState = "rejected"
        },
        [editCommentHandler.pending]: (state, action) => {
            state.editPostState = "loading"
        },
        [editCommentHandler.fulfilled]: (state, action) => {
            state.editPostState = "fulfilled"
            state.posts = action.payload
            state.showEditModal = false
        },
        [editCommentHandler.rejected]: (state, action) => {
            state.editPostState = "rejected"
            console.log(action.error)
        },
    }
})
export const postReducer = postSlice.reducer
export const postAction = postSlice.actions