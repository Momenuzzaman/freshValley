import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from 'src/app/productAddToCart';



const ProductDetail = ({ product }) => {
    const { name, img, price, weight } = product;
    const cart = useSelector((state) => state.cartReducer.cart)
    const dispatch = useDispatch();
    const productAddToCart = (product) => {
        dispatch(addToCart(product))
    };
    return (
        <div className='mx-auto mt-10'>
            <div className="w-4/5  md:h-[500px] mx-auto md:w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="p-8 rounded-t-lg h-9/12 w-full" src={img} />
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="my-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{name}- <span className="inline">{weight}</span></h5>
                    </a>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#71BA58] dark:text-white">৳{price}</span>
                        <button onClick={() => productAddToCart(product)} className="text-white bg-[#71BA58] hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;