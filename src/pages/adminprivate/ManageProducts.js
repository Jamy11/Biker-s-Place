import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Product from '../../components/shared/Product'
import useBikeCollection from '../../hooks/useBikeCollection'
import { notify } from '../../helper/helperToast';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router';

const ManageProducts = () => {
    const history = useHistory()
    const {user , admin} = useAuth()
    const { bikeCollection } = useBikeCollection()

    const deleteNow = (id) => {
        if (user.email && admin) {
            if (window.confirm('Are you sure you wnat to delete this')) {
                axios.delete(`${process.env.REACT_APP_BACKEND_URL}/bike-collection/${id}`)
                    .then(res => {
                        if (res?.data?.acknowledged) {
                            notify('Product deleted')
                        }
                        else {

                        }
                    })
            }
        }
        else {
            history.push('/login')
            return
        }

    }
    return (
        <div>
            <ToastContainer />
            <Container>
                <Typography variant="h4" sx={{ color: 'black', mb: 3, textAlign: 'center' }}>Available Products </Typography>

                <Grid container spacing={3}>
                    {
                        bikeCollection.map(product => <Product
                            product={product}
                            key={product._id}
                            deleteNow={deleteNow}
                        />)
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default ManageProducts
