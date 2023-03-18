import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faSquarePlus, } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { cartDeleteProduct, decreaseProduct, increaseProduct } from 'src/app/cartSlice';

const CheckOut = () => {
    const carts = useSelector((state) => state.cartReducer.cart);
    const dispatch = useDispatch()

    const handleCartDeleteProduct = (id) => {
        dispatch(cartDeleteProduct(id))

    }
    const handleIncreaseProduct = (product) => {
        dispatch(increaseProduct(product));
        console.log(product)
    }
    const handleDecreaseProduct = (product) => {
        dispatch(decreaseProduct(product))
    }
    const total = carts.reduce((total, product) => {
        const { price, quantity } = product;
        const totalPrice = price * quantity;
        return total += totalPrice;
    }, 0)

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                </header>

                <div className="mt-8">
                    {
                        <ul className="space-y-4">
                            {
                                carts.map(product => {
                                    const { id, quantity, price, name } = product
                                    let productPrice = quantity * price
                                    return (
                                        <li className="flex items-center gap-4">
                                            <button onClick={() => handleCartDeleteProduct(id)} className="text-gray-600 transition hover:text-red-600">
                                                <span className="sr-only">Remove item</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                    />
                                                </svg>
                                            </button>
                                            <img
                                                src={product.img}
                                                alt=""
                                                className="h-16 w-16 rounded object-cover"
                                            />
                                            <div>
                                                <h3 className="text-sm text-gray-900">{name}</h3>

                                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                    <div>
                                                        <dt className="inline">Price:</dt>
                                                        <dd className="inline">{price}</dd>
                                                    </div>
                                                    <div>
                                                        <dt className="inline">Total:</dt>
                                                        <dd className="inline">{productPrice}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                            <div className="flex flex-1 items-center justify-end gap-2">
                                                <button onClick={() => handleDecreaseProduct(product)} className="text-gray-600 transition hover:text-orange-600"><FontAwesomeIcon icon={faMinus} /></button>
                                                <p className="h-8 w-12 rounded pt-2 border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 ">{product.quantity}</p>
                                                <button onClick={() => handleIncreaseProduct(product)} className="text-gray-600 transition hover:text-green-600"><FontAwesomeIcon icon={faSquarePlus} /></button>

                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                        <div className="w-screen max-w-lg space-y-4">
                            <dl className="space-y-0.5 text-sm text-gray-700">
                                <div className="flex justify-between !text-base font-medium">
                                    <dt>Sub Total</dt>
                                    <dd>{total}</dd>
                                </div>
                            </dl>
                            <div className="flex justify-end">
                                <button

                                    className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckOut;