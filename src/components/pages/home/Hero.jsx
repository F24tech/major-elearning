import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'


function Hero() {
    const images = ['https://img-b.udemycdn.com/notices/featured_carousel_slide/image/6dbe7b9f-d020-460a-aef3-d33c852e4192.jpg', 'https://img-b.udemycdn.com/notices/featured_carousel_slide/image/acd50903-a00d-41e7-a6d8-8ee6ea729a29.jpg']
    return (
        <Box width={'90%'} mx='auto'  >
            <Carousel style={{ width: '70vw', margin: '0 auto' }} >
                {images.map((image, index) => (
                    <div key={index} style={{ margin: '0 auto' }} >
                        <img src={image} alt={`Image ${index}`} style={{ margin: '0 auto' }} />
                    </div>
                ))}
            </Carousel>
        </Box>
    )
}

export default Hero