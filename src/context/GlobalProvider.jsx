import React from 'react'
import { AdminProvider } from './admin/AdminProvider'
import { AuthProvider } from './auth/AuthProvider'
import { CheckoutProvider } from './checkout/checkoutProvider'

export const GlobalProvider = ({children}) => {
  return (
    <AuthProvider>
        <AdminProvider>
         <CheckoutProvider>
            {children}
         </CheckoutProvider>
        </AdminProvider>
    </AuthProvider>

  )
}
