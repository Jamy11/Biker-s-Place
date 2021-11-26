import React, { useEffect } from 'react'
import NewNavbar from '../../components/shared/NavBar/NewNavbar';
import ImageSlider from '../../components/Home/Carousel/ImageSlider'
import { SliderData } from '../../components/Home/Carousel/SliderData'
import useBikeCollection from '../../hooks/useBikeCollection';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../../components/shared/Product';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import { notify } from '../../helper/helperToast';
import Footer from '../../components/shared/Footer';
import Stat from '../../components/shared/Stat';
import AboutUs from '../../components/shared/AboutUs';
import TestNavbar from '../../components/shared/notUsed/TestNavbar';

const Home = () => {

    const { bikeCollection } = useBikeCollection()
    const newbikeCollection = bikeCollection.slice(0,6)
    const history = useHistory()
    const { status, setStatus } = useAuth()

    const buyNow = (id) => {
        history.push(`/purchase/${id}`)
    }

    useEffect(()=>{
        if (status) {
            if (status === 'Order Placed') {
                notify('Order Placed')
                setStatus('')
            }
        }
    },[status])
    

    return (
        <div>
            {/* <NewNavbar /> */}
            <TestNavbar />
            <ImageSlider slides={SliderData} />

            <Container>
                <Typography variant="h4" sx={{ color: 'black', mb: 3, textAlign: 'center' }}>Available Products </Typography>

                <Grid container spacing={3}>
                    {
                        newbikeCollection.map(product => <Product
                            product={product}
                            key={product._id}
                            buyNow={buyNow}
                        />)
                    }
                </Grid>
            </Container>
            <ToastContainer />
            <Stat />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Home
