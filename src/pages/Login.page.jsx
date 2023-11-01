import React, { useEffect, useState } from 'react';
import { Button, TextField, Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync } from '../redux/authslice';
import toast from 'react-hot-toast';


const LoginForm = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const auth = useSelector((state) => state.auth)

    console.log(auth)

    const dispatch = useDispatch()


    useEffect(() => {
        if (auth.error) {
            toast.error(auth.error)
        }
        if (auth.loading) {
            toast.loading('Loading...')
        }
        else {
            toast.dismiss()
        }
    }, [auth])


    const handleLogin = (e) => {
        e.preventDefault()

        // Handle login logic here
        if (!identifier) {
            toast.error("Please enter username or email")
            return;
        }
        if (!password) {
            toast.error("Please enter password")
            return;
        }

        dispatch(loginAsync({ identifier, password }))

    };

    return (
        <Box maxWidth="sm" width={300} my={5} mx="auto" >
            <div >
                <Typography variant="h4" component="h4" align="center" fontBold={700} >Login to Elearn</Typography>
                <form onSubmit={handleLogin} >
                    <Grid container mt={2} spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Username or email"
                                variant="outlined"
                                fullWidth
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant="contained" color="primary" fullWidth >
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={12} mx="auto" align="center"  >
                            <Typography varient="span" component="span" >or</Typography>
                            <Link to="/forgot-password" >  <Typography color="secondary" varient="span" component="span" >Forgot Password</Typography></Link>
                        </Grid>

                        <Grid item xs={12} >
                            <hr />
                        </Grid>

                        <Grid item xs={12} align="center" >
                            <Typography varient="span" component="span" >Do you have an account?</Typography>
                            <Link to="/signup" >  <Typography color="secondary" varient="span" component="span" >Signup</Typography></Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Box>
    );
};

export default LoginForm;
