import { useEffect, useReducer, useState } from "react";
import http from "../../http-common";
import AdminUserDataServices from "../../Services/AdminUserServices";
import AuthContext from "./AuthContext";
import {AuthReducer, TYPES, initialState} from './AuthReducer'


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

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }
        };

        try {
            const {data} = await http.get('user/relogged',config);
            
            authDispatch({
                type : TYPES.LOGIN,
                payload : data.user
            })

        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
        } finally {
            setAuthLoading(false);
        } 

    }

   useEffect(() => {
         reloggedUser()
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