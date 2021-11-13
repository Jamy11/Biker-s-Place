import React from 'react'
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

const Home = () => {

    const { bikeCollection } = useBikeCollection()
    const newbikeCollection = bikeCollection.slice(5)
    const history = useHistory()
    const { status, setStatus } = useAuth()

    const buyNow = (id) => {
        history.push(`/purchase/${id}`)
    }

    if (status) {
        if (status === 'Order Placed') {
            notify('Order Placed')
            setStatus('')

        }
    }

    return (
        <div>
            <NewNavbar />
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
        </div>
    )
}

export default Home
