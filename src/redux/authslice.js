import { createSlice } from '@reduxjs/toolkit';


import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils';

// Replace this with the actual API endpoint for login

export const loginAsync = createAsyncThunk('auth/login', async ({ identifier, password },) => {
    try {
        console.log(identifier, password, `${baseUrl}/api/auth/local`)
        // Make an API request to authenticate the user
        const response = await fetch(`${baseUrl}/api/auth/local`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier, password }),
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const user = await response.json();

        // Dispatch the login action to store the user in the Redux store

        return user;
    } catch (error) {
        // Handle login error and display a message or perform any other action
        throw error;
    }
});

export const signup = createAsyncThunk('auth/signup', async ({ name, email, password },) => {
    try {
        console.log(email, password, `${baseUrl}/api/auth/local/register`)
        // Make an API request to authenticate the user
        const response = await fetch(`${baseUrl}/api/auth/local/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, username: email, password }),
        });
        console.log(response)

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const user = await response.json();

        // Dispatch the login action to store the user in the Redux store

        return user;
    } catch (error) {
        // Handle login error and display a message or perform any other action
        throw error;
    }
});




const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null, // User not authenticated when it is null
        loading: false,
        error: null,
    },
    reducers: {

        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.error = action.error.message;
            })
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
