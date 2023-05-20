import React from 'react'
import { AdminProvider } from './admin/AdminProvider'
import { AuthProvider } from './auth/AuthProvider'
import {HelmetProvider} from 'react-helmet-async'
import { CheckoutProvider } from './checkout/CheckoutProvider'
import { ActivityProvider } from './activity/ActivityProvider'
import { CourseProvider } from './courses/CourseProvider'
import {PurchaseProvider} from './purchase/PurchaseProvider'

export const GlobalProvider = ({children}) => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <AdminProvider>
          <ActivityProvider>
            <CourseProvider>
              <CheckoutProvider>
                <PurchaseProvider>
                    {children}
                </PurchaseProvider>
              </CheckoutProvider>
            </CourseProvider>
          </ActivityProvider>
        </AdminProvider>
      </AuthProvider>
    </HelmetProvider>

  )
}
