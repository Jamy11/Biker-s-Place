import React, { useEffect, useState } from 'react'
import CustomerOrder from '../../components/shared/CustomerOrder'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../helper/helperToast';


const MyOrders = ({ user }) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/bike-order/${user.email}`)
            .then(res => res.json())
            .then(result => setOrders(result))
    }, [orders])

    const deleteOrder = (id) => {
        if (window.confirm('Are you sure you wnat to delete this')) {
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/bike-orders/${id}`)
                .then(res => {
                    if (res?.data?.acknowledged) {
                        notify('Order deleted')
                    }
                    else {

                    }
                })
        }
    }
    return (
        <div>
            <ToastContainer />

            <h1 className='text-center font-extrabold text-5xl'>My Orders</h1>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">

                        {
                            orders.map(order => <CustomerOrder
                                order={order}
                                key={order._id}
                                deleteOrder={deleteOrder}
                            />)
                        }
                    </div>

                    <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
                        <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                            <div className="flex flex-col justify-start items-start flex-shrink-0">
                                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                    <div className=" flex justify-start items-start flex-col space-y-2">
                                        <p className="text-base font-semibold leading-4 text-left text-gray-800">{user.displayName}</p>
                                        <p className="text-sm leading-5 text-gray-600">{orders.length} Previous Orders</p>
                                    </div>
                                </div>

                                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3 7L12 13L21 7" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="cursor-pointer text-sm leading-5 text-gray-800">{user.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyOrders
