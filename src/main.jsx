import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Auth0Provider } from '@auth0/auth0-react'

const queryClient = new QueryClient()


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin} cacheLocation='localstorage'>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
