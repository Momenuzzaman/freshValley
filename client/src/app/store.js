
import cartReduce from "./productAddToCart";
import productsReduce from "./productSlice";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        productsReducer: productsReduce,
        cartReducer: cartReduce
    },
});
export default store;