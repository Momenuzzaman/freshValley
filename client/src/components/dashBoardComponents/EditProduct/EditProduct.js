import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { editProduct } from 'src/app/productSlice';

const EditProduct = () => {
    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [name, setName] = useState(location.state.name)
    const [weight, setWeight] = useState(location.state.weight);
    const [price, setPrice] = useState(location.state.price);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleProductEdit = (e) => {
        e.preventDefault();
        dispatch(editProduct({ id, name, weight, price }))
        navigate("/", { replace: true })
    }
    return (
        <div >
            <p className='pt-8 pl-10 font-semibold text-3xl'>Edit Product</p>
            <div className="sm:mt-0 grid place-items-center ">
                <div className="md:grid  md:gap-6 mt-10">
                    <div className="pt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleProductEdit} className="w-full md:w-[800px] ">
                            <div className=" shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Product Name
                                            </label>
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                name="product-name"
                                                id="product-name"
                                                autoComplete="given-name"
                                                className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Wight
                                            </label>
                                            <input
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                type="text"
                                                name="wight"
                                                id="wight"
                                                autoComplete="family-name"
                                                className="mt-2 block w-full rounded-md appearance-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                Add Price
                                            </label>
                                            <input
                                                value={price}
                                                onChange={(e) => setPrice(parseInt(e.target.value))}
                                                type="number"
                                                name="add-price"
                                                id="add-price"
                                                autoComplete="given-name"
                                                className="mt-2 block w-full rounded-md border-0 appearance-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-200 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className=" px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="w-[82px] h-[37px] inline-flex justify-center rounded-md bg-[#71BA58] py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct