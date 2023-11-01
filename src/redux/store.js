import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import landingPageReducer from './landingpageslice';
import categories from './categoriesslice';
import auth from './authslice'


const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    landingPage: landingPageReducer,
    categories: categories,
    auth: auth
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
})



export const persistor = persistStore(store)
