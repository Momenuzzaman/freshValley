import productsReduce from "./productSlice";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer: {
        productsReducer: productsReduce
    },
});
export default store;