import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-pmg8ntcc7m0y0isa.us.auth0.com"
    clientId="NhHSljhpue7Uwf3hWV8Ag6eygLQFo3W5"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
  <BrowserRouter>  <App /></BrowserRouter>
 
  </React.StrictMode>
  </Auth0Provider>,
)
