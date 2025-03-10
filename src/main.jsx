import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/router';
import { HelmetProvider } from 'react-helmet-async';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import AppContext from './provider/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppContext>
            <RouterProvider router={router} />
          </AppContext>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
