import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";
export const Store=configureStore({
    reducer:{reducer:userReducer}
})