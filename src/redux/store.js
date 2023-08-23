import { configureStore } from '@reduxjs/toolkit'


//slices
import authReducer from "./slice/authSlice"
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
})