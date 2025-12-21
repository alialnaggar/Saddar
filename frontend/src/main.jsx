import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './app.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import ToastContainer from './components/common/ToastContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <App />
        <ToastContainer />
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
)
