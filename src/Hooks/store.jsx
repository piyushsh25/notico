import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/usersSlice";
import { loginReducer } from "./slices/loginSlice";

export const Store=configureStore({
    reducer:{userReducer,postReducer,loginReducer}
})