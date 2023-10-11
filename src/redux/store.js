import { configureStore } from "@reduxjs/toolkit";
import homeSlice from './slice/homeSlice';
import authSlice from "./slice/authSlice";
import { ecApi } from "../services/ecApi";

export const store = configureStore({
    reducer: {
        homeSlice, 
        [ecApi.reducerPath]: ecApi.reducer,
        authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecApi.middleware),
})