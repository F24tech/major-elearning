import { Button, IconButton, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

import Logo from '../assets/logo.svg'
import Logo1 from '../assets/logos/logo1.svg'
import Logo2 from '../assets/logos/logo2.svg'
import Logo3 from '../assets/logos/logo3.svg'
import Logo4 from '../assets/logos/logo4.svg'
import { Link } from 'react-router-dom'

function Footer() {
    const theme = useTheme()

    return (
        <Stack bgcolor={'#000'} p={2} px={4} gap={2} >

            {/* First child */}
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={4} >

                <div>
                    <Typography color="#fff" variant="h6" component="h3" fontWeight={600} >
                        Teach the world online
                    </Typography>
                    <Typography color="#fff" >
                        Create an online video course, reach students across the globe, and earn money
                    </Typography>
                </div>

                <Button variant="outlined" color={'light'} >Teach On Udemy</Button>


            </Stack>
            {/* First child */}




            {/* Second child */}
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={4} borderTop={'1px solid gray'} borderBottom={'1px solid gray'}>

                <div>
                    <Typography color="#fff" variant="h6" component="h3" fontWeight={500} >
                        Top companies choose
                        <Link href="/">
                            <Typography color="vibrant" component='span' variant="h6" fontWeight={600} > Elearn </Typography>
                        </Link>
                        to build in-demand career skills.
                    </Typography>

                </div>

                <Stack direction='row' columnGap={4} >
                    <img src={Logo1} />
                    <img src={Logo2} />
                    <img src={Logo3} />
                    <img src={Logo4} />
                </Stack>

            </Stack>
            {/* Second child */}



            {/* Forth  child */}
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} py={4} >
                <Link to="/">
                    <IconButton>
                        <img src={Logo} alt="Logo" width={150} />
                    </IconButton>
                </Link>

                <Typography color="white" fontSize={14}  >© 2023 Elearn, Made with ❤️</Typography>

            </Stack>
            {/* Forth  child */}



        </Stack>
    )
}

export default Footer