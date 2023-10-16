import React from 'react'
import { Outlet } from 'react-router-dom'

// 
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'

function Layout() {
    return (
        <Box flexGrow={1} >
            <Header />

            <Outlet />

            <Footer />

        </Box>
    )
}

export default Layout