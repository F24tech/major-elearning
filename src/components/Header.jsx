// React 
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

// Styles
import { Grid, IconButton, Menu, MenuItem, Typography, TextField, InputAdornment, Button } from '@mui/material'

// Icons
import SearchIcon from '@mui/icons-material/Search';


function Header() {

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
    return (
        <Grid container gap={5} p={1} bgcolor="#fce" alignItems={"center"}  >
            {/* Logo  */}
            <Grid item md={1}>
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

            <Grid item md={5}>
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
            <Grid item md={1} >Cart </Grid>
            <Grid item md={1} >
                <Button variant="outlined">Login</Button>
            </Grid>
            <Grid item md={1} >
                <Button variant="contained">Sign Up</Button>
            </Grid>
        </Grid>
    )
}

export default Header





