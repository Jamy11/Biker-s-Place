import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../components/shared/NavBar/NewNavbar'
import Product from '../../components/shared/Product'
import useBikeCollection from '../../hooks/useBikeCollection'

const Explore = () => {
    const { bikeCollection } = useBikeCollection()

    return (
        <div>
            <NewNavbar />
            <Container sx={{mt:5}}>
                <Typography variant="h4" sx={{ color: 'black', mb: 5, textAlign: 'center' }}>Available Products </Typography>

                <Grid container spacing={3}>
                    {
                        bikeCollection.map(product => <Product
                            product={product}
                            key={product._id}

                        />)
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Explore
