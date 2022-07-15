import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/postSlice";
import { userReducer } from "./slices/usersSlice";

export const Store=configureStore({
    reducer:{userReducer,postReducer}
})