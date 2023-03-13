import React, { useState } from 'react';
import { faArrowDown, faPenToSquare, faPlus, faTable, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite';
import { Link, Outlet } from 'react-router-dom';


export const Admin = () => {

    const Menus = [
        { title: "Manage Products", src: "faChartSimple" },
        { title: "Add Products", src: "faArrowAltCircleLeft" },
        { title: "Edit Product", src: "faArrowAltCircleLeft", },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-72 p-5 pt-8 duration-300 lg:h-screen bg-slate-800 relative transition-all transform lg:transform-none">
                <button onClick={() => setOpen(!open)} className="lg:hidden absolute cursor-pointer rounded-full -right-0 top-9 w-6 h-6 border-3 text-center  ">
                    <FontAwesomeIcon className="text-white text-xl" icon={faArrowDown} />
                </button>
                <div className="flex gap-x-4 items-center">
                    <h1 class="text-white font-medium text-2xl transform lg:scale-100 lg:origin-left lg:duration-200 transition-all">
                        FRESH  VALLEY
                    </h1>
                </div>
                <ul>
                    <Link to="/admin">
                        <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 lg:gap-x-1 lg:items-start">
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all text-white`}><FontAwesomeIcon icon={faTable} /></span>
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all`}>
                                <p>Manage Product</p>
                            </span>
                        </li>
                    </Link>
                    <Link to="/admin/addProduct">
                        <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 lg:gap-x-2 lg:items-start">
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all text-white`}><FontAwesomeIcon icon={faPlus} /></span>
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all`}>
                                <p>Add Product</p>
                            </span>
                        </li>
                    </Link>
                    <Link>
                        <li className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 lg:gap-x-2 lg:items-start">
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all text-white`}><FontAwesomeIcon icon={faPenToSquare} /></span>
                            <span className={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all`}>
                                <p>Edit Product</p>
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div class="w-full h-full  lg:flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin;