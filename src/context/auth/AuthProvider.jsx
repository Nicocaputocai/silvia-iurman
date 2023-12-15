import { useEffect, useReducer, useState } from "react";
import http from "../../http-common";
import AdminUserDataServices from "../../Services/AdminUserServices";
import AuthContext from "./AuthContext";
import {AuthReducer, TYPES, initialState} from './AuthReducer'
import UserDataServices from "../../Services/UserServices";

const AuthProvider = ({children}) => {
    const [auth, authDispatch] = useReducer(AuthReducer, initialState);
    const [authLoading, setAuthLoading] = useState(true);
    
    const reloggedUser = async() =>{
        try {
            const {data, status} = await UserDataServices.relogin();
            // console.log(data, status)
            if(status !== 200){
                authDispatch({
                    type : TYPES.LOGOUT
                })
                localStorage.removeItem('token');
                return;
            }
            authDispatch({
                type : TYPES.LOGIN,
                payload : data.user
            })
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            authDispatch({type:TYPES.LOGIN, payload:{user:data.user, token:data.token}});
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
        } finally {
            setAuthLoading(false);
        } 

    }

   useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            authDispatch({
                type : TYPES.LOGOUT
            })
            setAuthLoading(false);
            return;
        }
        
         reloggedUser()
         /* if(localStorage.getItem('user')){
            authDispatch({
                type : TYPES.LOGIN,
                // payload : {user:JSON.parse(localStorage.getItem('user')), token:cookies.get('token')}
                payload : {user:JSON.parse(localStorage.getItem('user')), token:localStorage.getItem('token')}
            })
         } */
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