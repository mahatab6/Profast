import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Roots'
import AuthProvider from './context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
      <QueryClientProvider client={queryClient}>
            <AuthProvider>
                  <RouterProvider router={router} />
                  <Toaster />
            </AuthProvider>
      </QueryClientProvider>
)
