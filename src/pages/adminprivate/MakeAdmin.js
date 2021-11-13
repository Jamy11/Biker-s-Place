import React from 'react'
import { ToastContainer } from 'react-toastify'
import axios from 'axios';
import { failed, notify } from '../../helper/helperToast';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    notify('Admin Added')
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4" >
                <ToastContainer />
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                            Make User Admin
                        </p>



                        <div className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                            <form >
                                <div className="mb-4 mt-5">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        User Email
                                    </label>
                                    <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="name" />
                                </div>
                                <div className="flex items-center justify-between">
                                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Submit' />
                            </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeAdmin
