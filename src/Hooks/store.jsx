import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/usersSlice";
import { loginReducer } from "./slices/loginSlice";
import { signUpReducers } from "./slices/signupSlice";

export const Store = configureStore({
    reducer: { userReducer, postReducer, loginReducer, signUpReducers }
})