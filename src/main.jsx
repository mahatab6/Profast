import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Roots'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
      <AuthProvider>
            <RouterProvider router={router} />
            <Toaster />
      </AuthProvider>
)
