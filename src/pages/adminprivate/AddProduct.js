import React from 'react'
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { failed, notify } from '../../helper/helperToast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/bike-collection`, data)
            .then(function (response) {
                if (response.data.insertedId) {
                    notify('Order Placed 🦄 ')
                    reset()
                }
                else {
                    failed('Could Not add item')
                }
            })
            .catch(function (error) {
                console.log(error);
        });
    }
    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4" >
            <ToastContainer />
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Add A Bike Product
                    </p>



                    <div className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                        <form >
                            <div className="mb-4 mt-5">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Bike Name
                                </label>
                                <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="name" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Price
                                </label>
                                <input {...register("price", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Price" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Image Link
                                </label>
                                <input {...register("image", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Image Link" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Engine
                                </label>
                                <input {...register("engine", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Engine" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Mileage
                                </label>
                                <input {...register("mileage", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Mileage" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Top Speed
                                </label>
                                <input {...register("topspeed", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Top Speed" />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Description
                                </label>
                                <input {...register("description", { required: true })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Description" />
                            </div>

                            <div className="flex items-center justify-between">
                                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value='Submit' />
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
