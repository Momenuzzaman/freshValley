import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct } from 'src/app/productSlice'
const ManageProduct = () => {
    const products = useSelector((state) => state.productsReducer.products);
    const dispatch = useDispatch();
    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
    }
    return (
        <div className="w-full  md:w-full sm:rounded-lg">
            <div>
                <h1 className='py-10 pl-10 font-semibold text-3xl'>Manage Product</h1>
                <table className="w-full  mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-1 md:px-5 py-1 md:py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-1 md:px-5 py-1 md:py-3">
                                Weight
                            </th>
                            <th scope="col" className="px-1 md:px-5 py-1 md:py-3">
                                Price
                            </th>
                            <th scope="col" className="px-1 md:px-5 py-1 md:py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (<tr class="bg-white  dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-2 md:px-5 py-1 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.name}
                                </th>
                                <td className="px-1 md:px-5 py-1 md:py-3">
                                    {product.weight}
                                </td>
                                <td className="px-1 md:px-5 py-1 md:py-3">
                                    ${product.price}
                                </td>
                                <td className="px-1 md:px-5 py-1 md:py-3 sm:flex ">
                                    <div className='px-1 text-2xl '><button className="text-green-400 "><FontAwesomeIcon icon={faPenToSquare} /></button></div>
                                    <div className='px-1 text-2xl'> <button onClick={() => handleDeleteProduct(product.id)} className='text-red-600 '><FontAwesomeIcon icon={faTrash} /></button></div>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageProduct;
