import React from 'react'
import { AdminProvider } from './admin/AdminProvider'
import { AuthProvider } from './auth/AuthProvider'

export const GlobalProvider = ({children}) => {
  return (
    <AuthProvider>
        <AdminProvider>
            {children}
        </AdminProvider>
    </AuthProvider>

  )
}
