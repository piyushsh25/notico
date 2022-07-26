import { createSlice } from "@reduxjs/toolkit"
import { createPostHandler, editCommentHandler,deleteBookmarksHandler, likeCommentHandler, dislikeCommentHandler, deletePostHandler, disLikePostHandler, editPostHandler, getBookmarksHandler, getIndividualPost, getPosts, initialState, likePostHandler, postBookmarksHandler, postCommentHandler } from "../Controllers/PostController"
export { createPostHandler, editCommentHandler,deleteCommentHandler, deleteBookmarksHandler, likeCommentHandler, dislikeCommentHandler, deletePostHandler, disLikePostHandler, editPostHandler, getBookmarksHandler, getIndividualPost, getPosts, likePostHandler, postBookmarksHandler, postCommentHandler } from "../Controllers/PostController"
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
        // edit post
        setEditModalHandler: (state, action) => {
            const { setTrue, post } = action.payload
            state.showEditModal = setTrue
            state.postToEdit = post
        },
        // edit comment
        setEditCommentModalHandler: (state, action) => {
            // set the edit modal to true and comment page to false
            const {setTrue,comment}=action.payload
            state.commentToEdit=comment
            state.editCommentPage=setTrue
            state.showCommentPage = false 
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
        },
        [getBookmarksHandler.rejected]: (state, action) => {
            state.getBookmarkState = "rejected"
        },
        [editPostHandler.pending]: (state, action) => {
            state.editPostState = "loading"
        },
        [editPostHandler.fulfilled]: (state, action) => {
            state.editPostState = "fulfilled"
            state.posts = action.payload
            state.showEditModal = false
        },
        [editPostHandler.rejected]: (state, action) => {
            state.editPostState = "rejected"
        },
        [likeCommentHandler.fulfilled]: (state, action) => {
            state.posts = action.payload
        },

        [dislikeCommentHandler.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        
        [editCommentHandler.fulfilled]: (state, action) => {
            state.posts=action.payload
        },
        [editCommentHandler.rejected]: (state, action) => {
            console.log("error editing post",action.error)
        },
    }
})
export const postReducer = postSlice.reducer
export const postAction = postSlice.actions