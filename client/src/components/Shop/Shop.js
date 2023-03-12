import React, { useState } from 'react'
import fakeData from '../assets/fakeData';
import ProductDetail from '../ProductDetail.js/ProductDetail';
import SearchBar from '../SearchBar/SearchBar';


const Shop = () => {

    return (
        <div>
            <SearchBar />
            <div className="container grid md:grid-cols-3 place-content-center gap-5 my-12 md:mx-auto ">
                {
                    fakeData.map((product) => (
                        <ProductDetail key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shop;