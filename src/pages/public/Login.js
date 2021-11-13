import React from 'react'
import { useHistory, useLocation } from 'react-router'
import LoginForm from '../../components/Login/LoginForm'
import MainRegisterForm from '../../components/Register/MainRegisterForm'
import Footer from '../../components/shared/Footer'
import NewNavbar from '../../components/shared/NavBar/NewNavbar'
// import useAuth from '../hooks/useAuth'

const Login = () => {

    return (
        <>
        <NewNavbar />
        <LoginForm />
        <Footer />
        </>
    )
}

export default Login
