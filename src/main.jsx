import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2E4374', // Change the primary color
    },
    secondary: {
      main: '#4B527E', // Change the secondary color
    },
    tertiary: {
      main: '#7C81AD', // Change the secondary color
    },
    vibrant: '#E5C3A6',
    light: { main: '#fff', }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
