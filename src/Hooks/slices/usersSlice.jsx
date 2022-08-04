import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    state: "idle",
    error: null,
    loggedUserState: "idle",
    loggedUserDetails: null,
    editProfileState: "idle"
}
export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await axios.get("/api/users")
    return response.data.users
})
export const getLoggedUserDetails = createAsyncThunk("users/getLoggedUserDetails", async (username) => {
    const response = await axios.get(`/api/users/${username}`)
    return response.data.user
})
export const setFollowUsersHandler = createAsyncThunk("users/setFollowUsersHandler", async (followUser) => {
    const token = localStorage?.getItem("notico-token")
    const followUserId = followUser._id
    const followResponse = await axios.post(`/api/users/follow/${followUserId}`, {},
        {
            headers:
            {
                authorization: token
            }
        }
    )
    return followResponse.data
})
export const setUnFollowUsersHandler = createAsyncThunk("users/setUnFollowUsersHandler", async (UnfollowUser) => {
    const token = localStorage?.getItem("notico-token")
    const followUserId = UnfollowUser._id
    const UnfollowResponse = await axios.post(`/api/users/unfollow/${followUserId}`, {},
        {
            headers:
            {
                authorization: token
            }
        }
    )
    return UnfollowResponse.data
})
export const editProfileHandler = createAsyncThunk("user/editProfileHandler", async ({ firstName, lastName, bioData, img, portfolioLink }) => {
    const token = localStorage?.getItem("notico-token")
    const userBio = { bio: bioData, portfolio: portfolioLink }
    const userData = { firstName, lastName, img, userBio }
    const editProfileResponse = await axios.post("/api/users/edit",
        { userData },
        {
            headers: {
                authorization: token
            }
        }
    )
    console.log(editProfileResponse)
})
const userSlice = createSlice({
    name: "getUsers",
    initialState,
    reducers: {
        setGetUserIdle: (state, action) => {
            state.state = "idle"
        },
        setGetLoggedUserIdle: (state, action) => {
            state.loggedUserState = "idle"
        },

    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.state = "loading"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.state = "failed"
            state.error = action.error
        },
        [getLoggedUserDetails.pending]: (state, action) => {
            state.state = "loading"
        },
        [getLoggedUserDetails.fulfilled]: (state, action) => {
            state.state = "fulfilled"
            state.loggedUserDetails = action.payload

        },
        [getLoggedUserDetails.rejected]: (state, action) => {
            state.state = "failed"
        },
        [setFollowUsersHandler.fulfilled]: (state, action) => {
            state.users = action.payload.users
        },
        [setUnFollowUsersHandler.fulfilled]: (state, action) => {
            state.users = action.payload.users
        },
        [editProfileHandler.pending]: (state, action) => {
            state.editProfileState = "loading"
        },
        [editProfileHandler.fulfilled]: (state, action) => {
            state.editProfileState = "fulfilled"
            console.log('done')
        },
        [editProfileHandler.rejected]: (state, action) => {
            state.editProfileState = "failed"
        },

    }
})
export const userReducer = userSlice.reducer
export const userAction = userSlice.actions