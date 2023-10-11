import { configureStore, createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";

const homeSlice = createSlice({
    name: "home",
    initialState:{
        allProducts: products,
        productsList: [],
        productPressed: [],
    },

    reducers: {
        setProductsList: (state, action) => {
            state.productsList = action.payload;
        },

        setProductPressed: (state, action) => {
            state.productPressed = action.payload;
        }
    },
})

export const {setProductsList, setProductPressed} = homeSlice.actions;
export default homeSlice.reducer;