import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Container, Box, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signup } from '../redux/authslice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';



const SignupForm = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()



    useEffect(() => {
        if (auth.error) {
            toast.error(auth.error)
        }
        if (auth.loading) {
            toast.loading('Loading...')
        }
        else if (auth.user !== null) {
            toast.dismiss()
            navigate('/my-learning')
        }

    }, [auth])


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignup = (e) => {
        e.preventDefault()

        // Handle login logic here
        if (!email) {
            toast.error("Please enter your email")
            return;
        }
        if (!name) {
            toast.error("Please enter your name")
            return;
        }
        if (!password) {
            toast.error("Please enter password")
            return;
        }

        dispatch(signup({ name, email, password }))

    };

    return (
        <Box maxWidth="sm" width={300} my={5} mx="auto" >
            <div >
                <Typography variant="h4" component="h4" align="center" fontBold={700} >Sign Up</Typography>
                <form onSubmit={handleSignup} >
                    <Grid container mt={2} spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>

                            <FormControl variant="outlined" fullWidth >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type='submit' fullWidth >
                                Sign Up
                            </Button>
                        </Grid>

                        <Grid item xs={12} mx="auto" align="center"  >
                            <Typography fontSize={12} varient="span" component="span" >By signing up, you agree to our </Typography>
                            <Link to="#" >  <Typography fontSize={12} color="secondary" varient="span" component="span" >Terms and Conditions</Typography></Link>
                        </Grid>

                        <Grid item xs={12} >
                            <hr />
                        </Grid>

                        <Grid item xs={12} align="center" >
                            <Typography varient="span" component="span" >Already  have an account?</Typography>
                            <Link to="/login" >  <Typography color="secondary" varient="span" component="span" >Login</Typography></Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Box>
    );
};

export default SignupForm;
