import { configureStore } from '@reduxjs/toolkit'

import landingPageReducer from './landingpageslice';
import categories from './categoriesslice';
import auth from './authslice'


export const store = configureStore({
    reducer: {
        landingPage: landingPageReducer,
        categories: categories,
        auth: auth
    },
})