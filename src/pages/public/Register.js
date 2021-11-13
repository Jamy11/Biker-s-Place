import React from 'react'
import MainRegisterForm from '../../components/Register/MainRegisterForm'
import Footer from '../../components/shared/Footer'
import NewNavbar from '../../components/shared/NavBar/NewNavbar'

const Register = () => {
    return (
        <div>
            <NewNavbar />
            <MainRegisterForm />
            <Footer />
        </div>
    )
}

export default Register
