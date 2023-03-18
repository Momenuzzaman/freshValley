import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import google from "../../components/assets/img/Group 571.png"
import facebook from "../../components/assets/img/fb_icon_325x325.png"
import { AuthContext } from '../userContext.js/UserContext';




const Login = () => {

    const { loginUser, loginWithGoogle } = useContext(AuthContext);

    // Login with Google
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
    };

    // Login with Email Password
    const handleLoginEmailAndPassword = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            {/* <button onClick={handleLoginWithGoogle} className="bg-black">Emon</button> */}
            <div className="flex items-center  justify-center  min-h-screen bg-gray-100 p-0 sm:p-12 ">
                <div className="mx-auto w-4/5  md:h-full max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    <div className="">
                        <form onSubmit={handleLoginEmailAndPassword} id="form" noValidate>
                            <div className="relative z-0 w-full mb-5">
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
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <fieldset className="relative z-0  p-px mb-5">
                                    <div className="block pt-3 pb-2 space-x-4">
                                        <input
                                            type="checkbox"
                                            name="radio"
                                            value="2"
                                            className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                        />
                                        Remember Me
                                    </div>
                                </fieldset>
                                <Link to=""
                                    className="inline-block border-b-2 mb-3 text-sm font-bold b text-lime-500 align-baseline hover:text-green-600"
                                    href="#"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                            <button
                                id="button"
                                type="submit"
                                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-lime-500 hover:bg-lime-600  hover:shadow-lg focus:outline-none"
                            >
                                Login
                            </button>
                            <p className="mt-2 mb-0 pt-1 text-sm font-semibold text-center">
                                Don't have an account?
                                <Link
                                    to='/register'
                                    className="text-lime-500 hover:text-green-600 pl-2"
                                >Create an account</Link>
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
                                    >   <span><img className=" w-[30px] h-[30px]" src={google} /></span>
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login with Google</span>
                                    </button>
                                </div>
                                <div className="flex flex-row justify-evenly group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <button
                                        id="button"
                                        type="button"
                                        className="relative flex items-center space-x-4 justify-center"
                                    >   <span className=" w-[30px] h-[30px]"><img src={facebook} /></span>
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Login with Facebook</span>
                                    </button>
                                </div>
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
export default Login