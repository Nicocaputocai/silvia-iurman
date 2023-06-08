import React from 'react'
import useAuth from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

export const UserNotLoggedLayout = ({children}) => {
    const {auth} = useAuth();

  return !auth.isLogged ? <Navigate to="/login" /> : children;
}
