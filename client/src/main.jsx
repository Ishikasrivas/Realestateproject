import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
// import { redirect } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-d6xknr6nxw2x0wvx.us.auth0.com"
      clientId="g3ZEhkYGMrrYJNxGznnSuOUEnggN7laN"
      authorizationParams={{
        redirect_uri: "https://realestateproject-phi.vercel.app"
      }}
      audience='http://localhost:8000'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
