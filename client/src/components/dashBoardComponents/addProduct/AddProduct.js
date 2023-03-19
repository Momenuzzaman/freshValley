import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'src/app/productSlice';
import { useNavigate } from 'react-router-dom';
const { v4: uudiv4 } = require("uuid");

const AddProduct = () => {
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");


    const numberOfProducts = useSelector((state) => state.productsReducer.products.length);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleImg = (e) => {
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const product = { id: uudiv4, name, weight, price, img };
        dispatch(addProduct(product));
        navigate("/", { replace: true })
    }

    return (
        <div >
            <p className='pt-8 pl-10 font-semibold text-3xl'>Add Product</p>
            <div className="sm:mt-0 grid place-items-center ">
                <div className="md:grid  md:gap-6 mt-10">
                    <div className="pt-5 md:col-span-2 md:mt-0">
                        <form onSubmit={handleAddProduct} className="w-full md:w-[800px] ">
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
                                        <div className="col-span-6 sm:col-span-3">
                                            <div className="mb-1">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Add Photo
                                                </label>
                                                <div className="flex  items-center justify-center bg-grey-lighter md:mr-44 md:mt-2">
                                                    <label className="w-[200px] h-[40px] flex flex-row items-center px-4  bg-[#DCFFEC] text-blue rounded-lg  tracking-wide  border  cursor-pointer hover:bg-blue hover:text-black">
                                                        <span className="text-[#DCFFEC]">  <FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                                        <span className=" text-base leading-normal">Upload photo</span>
                                                        <input type="file" onChange={handleImg} className="sr-only" accept="image/*" />
                                                    </label>
                                                </div>
                                            </div>
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

export default AddProduct;