import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
const AddProduct = () => {
    return (
        <div className="bg-[#F4FCFB] ">
            <div className="">
                <p className="text-xl font-semibold bg-white py-5 pl-4">Add Product</p>
                <div className=" sm:mt-0 grid place-items-center ">
                    <div className="md:grid  md:gap-6 mt-10">
                        <div className="pt-5 md:col-span-2 md:mt-0">
                            <form action="#" method="POST" className="w-full md:w-[800px] ">
                                <div className=" shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Product Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="product-name"
                                                    id="product-name"
                                                    autoComplete="given-name"
                                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Wight
                                                </label>
                                                <input
                                                    type="number"
                                                    name="wight"
                                                    id="wight"
                                                    autoComplete="family-name"
                                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Add Price
                                                </label>
                                                <input
                                                    type="number"
                                                    name="add-price"
                                                    id="add-price"
                                                    autoComplete="given-name"
                                                    className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <div className="mb-1">
                                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Add Photo
                                                    </label>
                                                    <div class="flex  items-center justify-center bg-grey-lighter md:mr-44 md:mt-2">
                                                        <label class="w-[200px] h-[40px] flex flex-row items-center px-4  bg-[#DCFFEC] text-blue rounded-lg  tracking-wide  border  cursor-pointer hover:bg-blue hover:text-black">
                                                            <span className="text-[#DCFFEC]">  <FontAwesomeIcon icon={faCloudArrowUp} /></span>
                                                            <span class=" text-base leading-normal">Upload photo</span>
                                                            <input id="image-upload" name="image-upload" type="file" className="sr-only" accept="image/*" />
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
        </div>
    )
}

export default AddProduct;