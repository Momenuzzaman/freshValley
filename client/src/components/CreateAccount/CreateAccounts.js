import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

import google from "../../components/assets/img/Group 571.png";
import facebook from "../../components/assets/img/fb_icon_325x325.png";
import { AuthContext } from '../userContext.js/UserContext';


const CreateAccounts = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const { createUser, loginWithGoogle } = useContext(AuthContext);

    // Create Account Email and Password
    const handleCreateAccount = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            })
    };
    // Login with google//
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error', error);
            });
    }
    return (
        <div>
            <div className="flex items-center  justify-center  min-h-screen bg-gray-100 p-0 sm:p-12 ">
                <div className="mx-auto w-4/5 max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Create an account</h1>
                    <div>
                        <form onSubmit={handleCreateAccount} id="form" noValidate>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">email required</span>
                            </div>

                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                            {/* <div className="relative z-0 w-full mb-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Confirm Password</label>
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div> */}
                            <button
                                id="button"
                                type="submit"
                                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-lime-500 hover:bg-lime-600  hover:shadow-lg focus:outline-none"
                            >
                                Create Account
                            </button>
                            <p className="mt-2 mb-0 pt-1 text-sm font-semibold text-center">
                                already an account?
                                <Link
                                    to='/login'
                                    className="text-lime-500 hover:text-green-600 ml-2"
                                >Login</Link>
                            </p>
                            {/* or */}
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2 text-black bg-white-900">or</span>
                            </div>
                            <div className="mt-2 grid space-y-4">
                                <div className="flex flex-row justify-evenly group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <button
                                        onClick={handleLoginWithGoogle}
                                        id="button"
                                        type="button"
                                        className="relative flex items-center space-x-4 justify-center"
                                    >   <span><img className='w-[30px] h-[30px]' src={google} /></span>
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login with Google</span>
                                    </button>
                                </div>
                                {/* <div className="flex flex-row justify-evenly group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <button
                                        id="button"
                                        type="button"
                                        className="relative flex items-center space-x-4 justify-center"
                                    >   <span className=" w-[30px] h-[30px]'"><img src={facebook} /></span>
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login with Facebook</span>
                                    </button>
                                </div> */}
                                <Link to="/"
                                    className="inline-block  mb-3 text-sm font-bold b text-lime-500 align-baseline hover:text-green-600"
                                    href="#"
                                >
                                    Back To Home
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccounts