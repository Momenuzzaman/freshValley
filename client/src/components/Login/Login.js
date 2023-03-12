import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <body>
            <div className="flex items-center  justify-center  min-h-screen bg-gray-100 p-0 sm:p-12 ">
                <div className="mx-auto w-4/5 max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    <div className="">
                        <form id="form" noValidate>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter email address</label>
                                <span className="text-sm text-red-600 hidden" id="error">Email address is required</span>
                            </div>
                            <div className="relative z-0 w-full mb-5">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter password</label>
                                <span className="text-sm text-red-600 hidden" id="error">Password is required</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <fieldset className="relative z-0  p-px mb-5">
                                    <div className="block pt-3 pb-2 space-x-4">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="radio"
                                                value="2"
                                                className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                                            />
                                            Remember Me
                                        </label>
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
                                type="button"
                                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-lime-500 hover:bg-lime-600  hover:shadow-lg focus:outline-none"
                            >
                                Login
                            </button>
                            <p className="mt-2 mb-0 pt-1 text-sm font-semibold text-center">
                                Don't have an account?
                                <Link
                                    to='/register'
                                    className="text-lime-500 hover:text-green-600"
                                >Create an account</Link>
                            </p>
                            {/* or */}
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                                <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2 text-black bg-white-900">or</span>
                            </div>
                            <div className="mt-2 grid space-y-4">
                                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                    </div>
                                </button>
                                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" className="absolute left-0 w-5" alt="Facebook logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Facebook</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </body>
    )
}
export default Login