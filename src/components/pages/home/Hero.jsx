import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { useSelector } from 'react-redux'
import { baseUrl } from '../../../utils'


function Hero() {
    const { data: carousalImages } = useSelector(state => state.landingPage.data)

    return (
        <Box width={'90%'} mx='auto'  >
            <Carousel style={{ width: '70vw', margin: '0 auto' }} >
                {carousalImages.attributes.carousal.map((image, index) => (
                    <div key={index} style={{ margin: '0 auto' }} >
                        <img src={`${baseUrl}${image.image.data.attributes.url}`} alt={`Image ${index}`} style={{ margin: '0 auto' }} />
                    </div>
                ))}
            </Carousel>
        </Box>
    )
}

export default Hero