import { createSlice } from "@reduxjs/toolkit"
import { createPostHandler, deleteBookmarksHandler, deleteCommentHandler, deletePostHandler, disLikePostHandler, editCommentHandler, getBookmarksHandler, getIndividualPost, getPosts, initialState, likePostHandler, postBookmarksHandler, postCommentHandler } from "../Controllers/PostController"
export { createPostHandler, deleteCommentHandler, deleteBookmarksHandler, deletePostHandler, disLikePostHandler, editCommentHandler, getBookmarksHandler, getIndividualPost, getPosts, likePostHandler, postBookmarksHandler, postCommentHandler } from "../Controllers/PostController"

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
        }
    }
})
export const postReducer = postSlice.reducer
export const postAction = postSlice.actions