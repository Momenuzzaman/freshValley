import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ProductDetail from '../ProductDetail.js/ProductDetail';
import SearchBar from '../SearchBar/SearchBar';


const Shop = () => {
    const products = useSelector((state) => state.productsReducer.products);
    console.log(products);
    return (
        <div>
            <SearchBar />
            <div className="container grid md:grid-cols-3 place-content-center gap-5 my-12 md:mx-auto ">
                {
                    products && products.map((product) => (
                        <ProductDetail key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;