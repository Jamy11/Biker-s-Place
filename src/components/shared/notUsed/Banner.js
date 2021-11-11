import React from 'react'
import { Carousel, Image } from 'react-bootstrap'

const Banner = () => {
    return (
        <div id='home'>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`/images/slider1.jpg`}
                        alt="First slide"
                        fluid />
                    <Carousel.Caption className='text-black'>
                        <h3 className='text-white'>Bali</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={`/images/slider2.jpg`}
                        alt="First slide"
                        fluid />
                    <Carousel.Caption className='text-black'>
                        <h3 className='text-white'>Maui</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Banner