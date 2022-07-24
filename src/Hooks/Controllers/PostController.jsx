import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const initialState = {
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
    commentData: "",
    postBookmarkState: "idle",
    deleteBookmarkState: "idle",
    getBookmarkState: "idle",
    bookmarks: [],
    showCommentPage: false,
    showEditModal: false,
    postToEdit: null,
    editPostState: "idle",
}
//post handlers
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
export const deletePostHandler = createAsyncThunk("delete/deletePostHandler", async (post) => {
    const encodedToken = localStorage.getItem("notico-token")
    const postId = post._id
    const deletedPostResponse = await axios.delete(`/api/posts/${postId}`,
        {
            headers: { authorization: encodedToken }
        })
    return deletedPostResponse.data.posts

})
//like dislike post handlers
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
//get single post 

export const getIndividualPost = createAsyncThunk("post/getIndividualPost", async (post) => {
    const postId = post._id
    const getIndividualPost = await axios.get(`/api/posts/${postId}`)
    return getIndividualPost.data.post

})
//comment controllers
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
export const deleteCommentHandler = createAsyncThunk("comment/deleteCommentHandler", async ({ post, comment }) => {
    const encodedToken = localStorage.getItem("notico-token")
    const { _id: postId } = post
    const { _id: commentId } = comment
    const deleteCommentResponse = axios.delete(`/api/comments/delete/${postId}/${commentId}`,
        {
            headers:
            {
                authorization: encodedToken
            }
        }
    )
    return deleteCommentResponse.status
})
//bookmark controllers
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
