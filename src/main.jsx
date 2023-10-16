import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'

import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store} >
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
