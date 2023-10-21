import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

import Logo1 from '../../../assets/logos/logo1.svg'
import Logo2 from '../../../assets/logos/logo2.svg'
import Logo3 from '../../../assets/logos/logo3.svg'
import Logo4 from '../../../assets/logos/logo4.svg'

function TrustCompanies() {
    const theme = useTheme()

    return (
        <Stack justifyContent={'center'} p={5} bgcolor='#80808026' gap={4} my={5} >
            <Typography align='center' variant='h3' component={'h3'} color="gray" fontWeight={400} fontSize={20} >Trusted by 140000+ learners from differnet companies</Typography>

            <Stack direction={'row'} columnGap={5} alignItems="center" justifyContent="center" style={{ transform: 'scale(1.2)' }}  >
                <img src={Logo1} />
                <img src={Logo2} />
                <img src={Logo3} />
                <img src={Logo4} />
                <img src={Logo1} />
                <img src={Logo3} />
            </Stack>

        </Stack >
    )
}

export default TrustCompanies