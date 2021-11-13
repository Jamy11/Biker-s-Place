
import NewNavbar from '../../components/shared/NavBar/NewNavbar'
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { notify } from '../../helper/helperToast';
import { ToastContainer } from 'react-toastify';


const Purchase = () => {
    const [show1, setshow1] = useState(true);
    const [item, setItem] = useState({})
    const { id } = useParams()
    const history = useHistory()
    const {user ,setStatus} = useAuth()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/bike-collection/${id}`)
            .then(res => res.json())
            .then(result => setItem(result))
    }, [])

    const goBackToHome = () => {
        history.push('/')
    }

    const  addToOrder = ()=>{
        item.email = user.email
        delete(item._id)
        fetch(`${process.env.REACT_APP_BACKEND_URL}/bike-order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setStatus('Order Placed')
                    history.push('/')
                }
            });

    }


    if (id === undefined || id === null) {
        return (
            <>
                <NewNavbar />
                <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800 text-center mt-5">Please Buy product to add to cart</p>
            </>

        )
    }

    return (
        <div>
            <NewNavbar />

            <div className="mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
                <div className="flex flex-col jusitfy-start items-start">
                    <div>
                        <p className="text-sm leading-4 text-gray-600">Home</p>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">Buy {item.name}</h1>
                    </div>
                    <div className="mt-4">
                        <p className="text-2xl tracking-tight leading-6 text-gray-600">1 items</p>
                    </div>
                    <div className=" mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0">
                        <div className="flex flex-col">
                            <div className="relative">
                                <img className="hidden lg:block" src={item.image} alt="bag" />
                                <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/ZH9FmZL/Rectangle-23-1.png" alt="bag" />
                                <img className=" sm:hidden" src="https://i.ibb.co/cyN26yn/Rectangle-23.png" alt="bag" />

                                <button onClick={goBackToHome} aria-label="close" className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400">
                                    <svg className="fil-current" width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 1L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1 1L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                            </div>
                            <div className="mt-6 flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">{item.name}</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button aria-label="show menu" onClick={() => setshow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400">
                                        <svg className={`fill-stroke ${show1 ? "block" : "hidden"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 5L5 1L1 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg className={`fill-stroke ${show1 ? "hidden" : "block"}`} width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div id="menu1" className={` flex-col jusitfy-start items-start mt-12 ${show1 ? "flex" : "hidden"}`}>
                                <div>
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800Î">{item.description}</p>
                                </div>
                                <div className='mt-2'>
                                    <p className="tracking-tight text-xs leading-3 text-gray-800">{item.mileage}</p>
                                </div>
                                <div className="mt-2">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{item.topspeed}</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{item.engine}</p>
                                </div>
                                <div className="mt-6">
                                    <p className="tracking-tight text-base font-medium leading-4 text-gray-800">{item.price} Taka Only</p>
                                </div>
                                <div className="flex jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                                    <div className="w-full" onClick={()=>{addToOrder()}}>
                                        <button  className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
