import { configureStore } from '@reduxjs/toolkit'
import landingPageReducer from './landingpageslice';

export const store = configureStore({
    reducer: {
        landingPage: landingPageReducer,
    },
})