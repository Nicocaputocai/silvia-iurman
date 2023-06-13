import { useEffect, useReducer, useState } from "react";
import http from "../../http-common";
import AdminUserDataServices from "../../Services/AdminUserServices";
import AuthContext from "./AuthContext";
import {AuthReducer, TYPES, initialState} from './AuthReducer'
import UserDataServices from "../../Services/UserServices";
import { cookies } from "../../config/cookies";


const AuthProvider = ({children}) => {
    const [auth, authDispatch] = useReducer(AuthReducer, initialState);
    const [authLoading, setAuthLoading] = useState(false);
    
    const reloggedUser = async() =>{
        setAuthLoading(true);
       
        const token = localStorage.getItem('token');
        if(!token){
            authDispatch({
                type : TYPES.LOGOUT
            })
            setAuthLoading(false);
            return null;
        };

        try {
            const {data, status} = await UserDataServices.relogin();

            if(status !== 200){
                authDispatch({
                    type : TYPES.LOGOUT
                })
                localStorage.removeItem('token');
                setAuthLoading(false);
                return null;
            }
            authDispatch({
                type : TYPES.LOGIN,
                payload : data.user
            })
            localStorage.setItem('token', data.token);
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
        } finally {
            setAuthLoading(false);
        } 

    }

   useEffect(() => {
         /* reloggedUser() */
         if(localStorage.getItem('user')){
            authDispatch({
                type : TYPES.LOGIN,
                payload : {user:JSON.parse(localStorage.getItem('user')), token:cookies.get('token')}
            })
         }
    }, [])
    return (
        <AuthContext.Provider
            value={
                {
                    auth,
                    authDispatch,
                    authLoading
                }
            }
        >
            {children}

        </AuthContext.Provider>
  )

}
export {
    AuthProvider
}

export default AuthContext