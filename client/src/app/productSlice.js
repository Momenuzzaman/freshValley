import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            name: 'Marks Full Cream Milk Powder',
            price: 234,
            img: 'https://res.cloudinary.com/sadagar/image/upload/v1624517133/products/7147/f670ba2f-739f-4bc0-9d37-f1dce25a74cf.jpg',
            weight: "500 gm"
        },
        {
            id: 2,
            name: 'Moushum Bay Leaves',
            price: 134,
            img: 'https://pallibazar.com/pub/media/catalog/product/cache/c0bb400db441ec67b37045c5a66e35a8/1/1/118_18.jpg',
            weight: "200 gm"
        },
        {
            id: 3,
            name: 'Onion Local',
            price: 90,
            img: 'https://cdn.shopify.com/s/files/1/0206/9470/products/2411-done_1024x1024.jpg?v=1621483922',
            weight: "1 kg"
        },
        {
            id: 4,
            name: 'Rashid Minicate Rice',
            price: 3430,
            img: 'https://pallibazar.com/pub/media/catalog/product/cache/cf3f2243ef4940fd5c66f2ff035145ac/1/6/161_13.jpg',
            weight: "50 kg"
        },
        {
            id: 5,
            name: 'Omera LPG Refill ',
            price: 1700,
            img: 'https://sohago.com/image/kitchen-dining/kitchen-dining-195465/kitchen-dining-0-195465.jpg',
            weight: "12 kg"
        },
        {
            id: 6,
            name: 'Bombay Sweets Mr.Twist',
            price: 20,
            img: 'https://chaldn.com/_mpimage/bombay-sweets-mr-twist-28-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D119709&q=best&v=1google.com/search?q=bombay+sweets+chips&tbm=isch&ved=2ahUKEwjN9NGNvtT9AhUM3XMBHf4SDNgQ2-cCegQIABAA&oq=bombay+s&gs_lcp=CgNpbWcQARgBMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATMgcIABCABBATOgQIIxAnOggIABAHEB4QEzoHCCMQ6gIQJzoECAAQQzoLCAAQgAQQsQMQgwE6CAgAELEDEIMBOgUIABCxAzoFCAAQgARQiwhYxVFgi2BoAnAAeASAAZoCiAHbIJIBBDItMTeYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=ksUMZM3jFYy6z7sP_qWwwA0&rlz=1C1BNSD_enBD950BD950#imgrc=Cp9G2uNbQ4rtlM&imgdii=Qs7PfN-zrdz-3M',
            weight: "25 gm"
        },
        {
            id: 7,
            name: 'Life Soap Bar Total',
            price: 40,
            img: 'https://www.lifebuoy.in/sk-eu/content/dam/brands/lifebuoy/india/2133695-lifebuoy-innovation-total-soap-wrapper-125g---total-10.png.rendition.1500.1500.png',
            weight: "100 gm"
        },
        {
            id: 8,
            name: 'Ruchi BBQ Chanachur',
            price: 45,
            img: 'https://res.cloudinary.com/sadagar/image/upload/v1578989113/products/2293/1533f872-47f8-4701-93b0-2a63c47581ee.jpg',
            weight: "350 gm"
        },
        {
            id: 9,
            name: 'Parachute Coconut Oil',
            price: 310,
            img: 'https://images.shajgoj.com/wp-content/uploads/2020/09/Parachute-Coconut-Oil-200ml-small.png',
            weight: "200 ml"
        }
    ],

};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        showProducts: (state) => state,
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload)
        }
    }
})

export const { showProducts, addProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;