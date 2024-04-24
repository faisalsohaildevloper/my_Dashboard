import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './asset/index..css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './App/context/auth.context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <AuthProvider>
     <App />
    </AuthProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
