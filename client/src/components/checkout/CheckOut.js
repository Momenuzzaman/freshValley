import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
const products = [
    { name: 'Moushum', weight: '200gm', price: 234, quantity: 1 },
    { name: 'Moushum', weight: '200gm', price: 234, quantity: 3 },
    { name: 'egg', weight: '200gm', price: 234, quantity: 3 },
    { name: 'egg', weight: '200gm', price: 234, quantity: 3 },
    { name: 'egg', weight: '200gm', price: 234, quantity: 3 },
    { name: 'egg', weight: '200gm', price: 234, quantity: 3 },
]
const CheckOut = () => {
    return (
        <div className="w-4/5 md:w-11/12  mx-auto">
            <p className="font-bold text-4xl md:pl-14 mt-20">Checkout</p>
            <div className="rounded-lg md:rounded-3xl w-11/12 h-2/5 md:h-1/3 border-solid shadow-lg  border-gray-50 mx-auto">
                <div className="w-11/12 mx-auto mt-20 md:mt-16 ">
                    <div className='flex justify-between border-b leading-10'>
                        <p className="">Description</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    {
                        products.map((product, index) => (
                            <div className='flex justify-between font-semibold leading-10'>
                                <p className="w-[210px]">{product.name}</p>
                                <p className=" w-[150px]">{product.quantity}</p>
                                <p>{product.price}</p>
                            </div>
                        ))
                    }
                    <div className="flex justify-between border-t font-semibold pb-4 leading-10">
                        <p>total</p>
                        <p>34350</p>
                    </div>
                </div>
                <button className="absolute bg-[#71BA58] font-semibold text-white mt-20 mr-16 md:mr-40 md:mt-16 right-0 h-[60px] w-[124px] rounded-xl">Checkout</button>
            </div>
        </div>
    )
}

export default CheckOut;