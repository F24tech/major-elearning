import { Container, Stack, Box, useTheme, Typography } from '@mui/material'
import React from 'react'
import { MyLearninTabs } from '../components'

function MyLearningPage() {
    const theme = useTheme()
    return (
        <Box p={2} pt={8} style={{ backgroundColor: theme.palette.secondary.main }} h={12} >
            <Container  >
                <Typography component={'h4'} variant='h4' color={'#fff'}  >My Learnings</Typography>

                <MyLearninTabs />
            </Container>
        </Box>
    )
}

export default MyLearningPage