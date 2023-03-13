import React, { useState } from 'react';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'flowbite';
import { Link, Outlet } from 'react-router-dom';


export const Admin = () => {

    const Menus = [
        { title: "Dashboard", src: "faArrowAltCircleLeft" },
        { title: "Inbox", src: "faArrowAltCircleLeft" },
        { title: "Accounts", src: "faArrowAltCircleLeft", },
        { title: "Schedule ", src: "faArrowAltCircleLeft" },

    ];
    const [open, setOpen] = useState(false);
    return (
        <div class="flex flex-col lg:flex-row w-full">
            <div class="w-full lg:w-72 p-5 pt-8 duration-300 lg:h-screen bg-slate-800 relative transition-all transform lg:transform-none">
                <button onClick={() => setOpen(!open)} class="lg:hidden absolute cursor-pointer rounded-full -right-0 top-9 w-10 h-10 border-3  bg-white ">
                    <FontAwesomeIcon class="text-slate-800 text-xl" icon={faArrowAltCircleLeft} />
                </button>
                <div class="flex gap-x-4 items-center">
                    <h1 class="text-white font-medium text-2xl transform lg:scale-100 lg:origin-left lg:duration-200 transition-all">
                        FRESH
                    </h1>
                    <h1 class="text-white font-medium text-2xl transform lg:scale-0 lg:origin-left lg:duration-200 transition-all">
                        VALLEY
                    </h1>
                </div>
                <ul class="pt-6 lg:block">
                    {Menus.map((Menu, index) => (
                        <li key={index} class="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 lg:gap-x-0 lg:items-start">
                            <span class={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all`}>    <FontAwesomeIcon icon={faArrowAltCircleLeft} /></span>
                            <span class={`${!open && "hidden"} lg:inline-block origin-left lg:duration-200 transition-all`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="w-full  lg:flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default Admin;