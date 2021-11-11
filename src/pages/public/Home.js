import React from 'react'
import NewNavbar from '../../components/shared/NavBar/NewNavbar';
import ImageSlider from '../../components/Home/Carousel/ImageSlider'
import {SliderData} from '../../components/Home/Carousel/SliderData'

const Home = () => {

    return (
        <div>
            <NewNavbar />
            <ImageSlider slides={SliderData} />
        </div>
    )
}

export default Home
