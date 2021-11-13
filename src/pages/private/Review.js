import React, { useEffect, useState } from 'react'
import CustomerOrder from '../../components/shared/CustomerOrder'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { notify } from '../../helper/helperToast';
import useBikeCollection from '../../hooks/useBikeCollection';
import { Container, Grid, Typography } from '@mui/material';
import Product from '../../components/shared/Product';

const Review = ({ user }) => {
    const { bikeCollection } = useBikeCollection()
    return (
        <div>
            <Container>
                <Typography variant="h4" sx={{ color: 'black', mb: 3, textAlign: 'center' }}>Available Products </Typography>

                <Grid container spacing={3}>
                    {
                        bikeCollection.map(product => <Product
                            product={product}
                            key={product._id}
                            // buyNow={buyNow}
                        />)
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default Review
