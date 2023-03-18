import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import 'flowbite';
import { AuthContext } from '../userContext.js/UserContext';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate();
    const loginButtonHandler = () => {
        navigate('/login');
    };
    const handleLogOutUser = () => {
        logOut()

    };
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between  mx-auto md:items-center md:flex md:w-10/12">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <p className="text-2xl font-semibold">FRESH VA<span className="text-[#71BA58]">LL</span>EY</p>
                        {user?.email && <span>Welcome {user.email}</span>}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="flex md:items-center flex-col p-4 mt-6 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="text-base block py-2 pl-3 pr-4 mr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#71BA58] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order" className="text-base block py-2 pl-3 pr-4 mr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#71BA58] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Orders</NavLink>
                            </li>
                            {user?.email === "admin@gmail.com" ? <li>
                                <NavLink to="/admin" className="text-base block py-2 pl-3 pr-4 mr-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#71BA58] md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</NavLink>
                            </li> : null}
                            {!user?.email ?
                                <button type="button" onClick={loginButtonHandler} className="text-white bg-[#71BA58] hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  ">Login</button>
                                : <button type="button" onClick={handleLogOutUser} className="text-white bg-[#71BA58] hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3  ">Log Out</button>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;