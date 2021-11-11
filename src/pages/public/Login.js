import React from 'react'
import { useHistory, useLocation } from 'react-router'
import MainRegisterForm from '../../components/Register/MainRegisterForm'
import NewNavbar from '../../components/shared/NavBar/NewNavbar'
// import useAuth from '../hooks/useAuth'

const Login = () => {
    // const {signInUsingGoogle , setIsLoading} = useAuth()
    const history = useHistory()
    const location = useLocation()

    const redirect_uri = location.state?.from || '/'


    // const logInUsingGoogle = ()=>{
    //     signInUsingGoogle().then(res=>{
    //         history.push(redirect_uri)
    //     }).catch(err=>console.log(err))
    //     .finally(()=>setIsLoading(false))
    // }
    return (
        <>
        <NewNavbar />

        </>
    )
}

export default Login
