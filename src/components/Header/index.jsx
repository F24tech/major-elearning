// React 
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Styles
import { Grid, IconButton, Menu, MenuItem, Typography, TextField, InputAdornment, Button, Stack, Avatar } from '@mui/material'
import { useTheme } from '@mui/material/styles';


// Icons
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountMenu from './AccountMenu';


function Header() {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleCategorySelect = (category) => {
        handleCloseMenu();
        // You can perform additional actions here based on the selected category.
    };

    const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

    const isLogin = false;




    return (
        <Grid container px={2} py={0} bgcolor={theme.palette.vibrant} alignItems={"center"} justifyContent={"space-between"}   >
            {/* Logo  */}
            <Grid item md={1.5}>
                <Link to="/">
                    <IconButton>
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Logo" width={120} />
                    </IconButton>
                </Link>
            </Grid>
            {/* Logo  */}

            {/* Categories */}
            <Grid item md={1}>
                <Typography
                    onMouseEnter={handleOpenMenu}
                    aria-controls="category-menu"
                    aria-haspopup="true"
                    style={{ cursor: 'pointer' }}
                >
                    Categories
                </Typography>


                <Menu
                    id="category-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} onClick={() => handleCategorySelect(category)}>
                            {category}
                        </MenuItem>
                    ))}
                </Menu>
            </Grid>
            {/* Categories */}

            <Grid item md={6.5}>
                <TextField
                    id="search"
                    variant="outlined"
                    placeholder='Search popular courser here ...'
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}

                    style={{
                        borderRadius: '20px',  // Customize the border radius
                        padding: '10px',      // Customize the padding
                    }}

                />


            </Grid>
            <Grid item md={3} >
                <Stack direction={'row'} spacing={3} justifyContent={"end"}  >
                    <IconButton><ShoppingCartIcon /></IconButton>

                    {
                        isLogin ?
                            <React.Fragment>
                                <IconButton><NotificationsActiveIcon /></IconButton>
                                <IconButton><FavoriteBorderIcon /></IconButton>
                                <AccountMenu />

                            </React.Fragment>
                            :
                            <React.Fragment>
                                <Button variant="outlined">Login</Button>
                                <Button variant="contained">Sign Up</Button>
                            </React.Fragment>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Header









