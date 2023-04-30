import React from 'react'
import { AdminProvider } from './admin/AdminProvider'
import { AuthProvider } from './auth/AuthProvider'
import {HelmetProvider} from 'react-helmet-async'
import { CheckoutProvider } from './checkout/checkoutProvider'
import { ActivityProvider } from './activity/ActivityProvider'

export const GlobalProvider = ({children}) => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <AdminProvider>
          <ActivityProvider>
              <CheckoutProvider>
                  {children}
              </CheckoutProvider>
          </ActivityProvider>
        </AdminProvider>
      </AuthProvider>
    </HelmetProvider>

  )
}
