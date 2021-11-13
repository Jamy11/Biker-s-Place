import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useHistory, useLocation } from 'react-router'
import ReactStars from "react-rating-stars-component";
import useAuth from '../../hooks/useAuth';
import { notify } from '../../helper/helperToast';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

const Product = ({ product, buyNow , deleteNow}) => {

    const { name, price, image, description, _id, rating  } = product
    const location = useLocation()
    const history = useHistory()
    const { user, admin } = useAuth()


    const ratingChanged = (newRating) => {
        if (!user.email) {
            history.push('/login')
            return
        }
        product.rating = newRating

        fetch(`${process.env.REACT_APP_BACKEND_URL}/bike-collection/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    notify('Rating Added')
                }
            })

    };



    return (
        <>
        <ToastContainer />
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275, boxShadow: 0, border: 0 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                            {name}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                            Price: {price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                            {description}
                        </Typography>
                        <Box sx={{ textAlign: 'center' }} >
                            <ReactStars
                                value={rating}
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            />
                        </Box>
                        <Box sx={{ textAlign: 'center' }} className={
                            (location.pathname === '/dashboard/review') || (location.pathname === '/dashboard/manage-products') && 'hidden'}>
                            <Button onClick={() => buyNow(_id)} variant="contained" sx={{ background: 'black', mt: 3 }} >Buy Now</Button>
                        </Box>


                        {location.pathname === '/dashboard/manage-products' &&
                            <Box sx={{ textAlign: 'center' }} >
                                <Button onClick={() => deleteNow(_id)} variant="contained" sx={{ background: 'black', mt: 3 }} >Delete</Button>
                            </Box>
                        }


                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}

export default Product
