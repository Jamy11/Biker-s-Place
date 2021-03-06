import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

const LoginForm = () => {
    const [loginData, setloginData] = useState({});
    const { loginUser , isLoading} = useAuth()

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {

        setloginData({ ...loginData, [e.target.name]: e.target.value });
    }
    const handelSubmint = (e) => {
        e.preventDefault();

        if(loginData.password.length <6){
            alert('Password must be 6')
            return
        }
        loginUser(loginData.email, loginData.password, location, history);
    }

    if (isLoading) {
        return (
            <CircularProgress />

        )
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Log In to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handelSubmint}>

                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input onBlur={handleOnChange} id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input onBlur={handleOnChange} id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">

                        <div className="text-sm">
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            Log In
                        </button>
                    </div>
                </form>
                <NavLink to='/register'>
                    <div>
                        <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-5">
                            Don't Have an Account? Create Now
                        </button>
                    </div>
                </NavLink>


            </div>
        </div>
    )
}

export default LoginForm
