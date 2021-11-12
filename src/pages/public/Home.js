import React from 'react'
import NewNavbar from '../../components/shared/NavBar/NewNavbar';
import ImageSlider from '../../components/Home/Carousel/ImageSlider'
import { SliderData } from '../../components/Home/Carousel/SliderData'
import useBikeCollection from '../../hooks/useBikeCollection';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../../components/shared/Product';

const Home = () => {

    const {bikeCollection} = useBikeCollection()
    const newbikeCollection= bikeCollection.slice(5)

    return (
        <div>
            <NewNavbar />
            <ImageSlider slides={SliderData} />

            <Container>
                <Typography variant="h4" sx={{ color: 'black', mb: 3 , textAlign:'center'}}>Available Products </Typography>

                <Grid container spacing={3}>
                    {
                        newbikeCollection.map(product => <Product 
                            product={product}
                            key={product._id}
                        
                        />)
                    }
                </Grid>
            </Container>

        </div>
    )
}

export default Home
