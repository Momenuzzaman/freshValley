import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
const ManageProduct = () => {
    const products = [
        { name: 'Moushum', weight: '200gm', price: 234 },
        { name: 'Moushum', weight: '200gm', price: 234 },
        { name: 'Moushum', weight: '200gm', price: 234 }
    ]
    return (

        <div class=" sm:rounded-lg">
            <div>
                <h1 className='py-10 pl-10 font-semibold text-3xl'>Manage Product</h1>
                <table class="w-11/12  mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-5 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Weight
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-5 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (<tr class="bg-white  dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.name}
                                </th>
                                <td class="px-6 py-4">
                                    {product.weight}
                                </td>
                                <td class="px-6 py-4">
                                    ${product.price}
                                </td>
                                <td class="px-6 py-4 sm:flex ">
                                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                                    <div className='px-1 text-2xl '><button className="text-green-400 "><FontAwesomeIcon icon={faPenToSquare} /></button></div>
                                    <div className='px-1 text-2xl'> <button className='text-red-600 '><FontAwesomeIcon icon={faTrash} /></button></div>
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
