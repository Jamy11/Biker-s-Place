import { Button, Card, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Product = ({ product , buyNow}) => {

    const { name, price, image, description ,_id} = product

    return (
        <>
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
                        <Box sx={{ textAlign: 'center' }}>
                            <Button onClick={ () =>buyNow(_id)} variant="contained" sx={{ background: 'black', mt: 3 }} >Buy Now</Button>
                        </Box>
                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}

export default Product
