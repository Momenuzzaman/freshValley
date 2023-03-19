import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


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
                toast.info("increased product quantity", {
                    position: "bottom-left"
                })
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 })
                toast.success("added a new product to cart", {
                    position: "bottom-left"
                })
            }
        },

        cartDeleteProduct: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload)
        },
        increaseProduct: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id == action.payload.id);
            if (state.cart[productIndex].quantity) {
                state.cart[productIndex].quantity++;
            }
        },
        decreaseProduct: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id == action.payload.id);
            if (state.cart[productIndex].quantity > 1) {
                state.cart[productIndex].quantity--;
            }
        }
    }
})

export const { addToCart, cartDeleteProduct, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;