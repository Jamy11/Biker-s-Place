import { Button } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router'

const CustomerOrder = ({ order, deleteOrder }) => {
    const location = useLocation()
    return (
        <div>
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                    <div className="pb-4 md:pb-8 w-full md:w-40">
                        <img className="w-full hidden md:block" src={order.image} alt="dress" />
                        <img className="w-full md:hidden" src={order.image} alt="dress" />
                    </div>
                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{order.name}</h3>
                            <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Engine: </span> {order.engine}
                                </p>
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Mileage: </span> {order.mileage}
                                </p>
                                <p className="text-sm leading-none text-gray-800">
                                    <span className="text-gray-300">Top speed: </span> {order.topspeed}
                                </p>
                                <p className="text-sm leading-none text-gray-800 mt-5">
                                    <span className="text-gray-300">Description </span> {order.description}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between space-x-8 items-start w-full">
                            <p className="text-base xl:text-lg leading-6 text-gray-800">01</p>
                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">{order.price} Taka</p>
                            {location.pathname === '/dashboard/manage-orders' &&
                                <p className="text-base x:text-lg font-semibold leading-6 text-gray-800">Ordered By: {order.email}</p>
                            }
                        </div>
                    </div>
                </div>
                {location.pathname !== '/dashboard/manage-orders' &&
                    <button onClick={() => deleteOrder(order._id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                        Delete
                    </button>
                }


            </div>
        </div>
    )
}

export default CustomerOrder
