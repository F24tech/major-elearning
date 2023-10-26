import { configureStore } from '@reduxjs/toolkit'
import landingPageReducer from './landingpageslice';
import categories from './categoriesslice';

export const store = configureStore({
    reducer: {
        landingPage: landingPageReducer,
        categories: categories,
    },
})