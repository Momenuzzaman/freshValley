import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id == action.payload.id);
            if (productIndex >= 0) {
                state.cart[productIndex].quantity++;
            }
            else {
                const tempProduct = { ...action.payload, quantity: 1 }
                state.cart.push(tempProduct)
            }
        },

        cartDeleteProduct: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload)
        },
        increaseProduct: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id == action.payload.id);
            if (state.cart[productIndex].quantity) {
                state.cart[productIndex].quantity += 1;
            }
        },
        decreaseProduct: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id == action.payload.id);
            if (state.cart[productIndex].quantity > 1) {
                state.cart[productIndex].quantity -= 1;
            }
        }
    }
})

export const { addToCart, cartDeleteProduct, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;