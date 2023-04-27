import { useEffect, useReducer } from "react";
import httpLocalCommon from "../../http-local-common";
import AdminUserDataServices from "../../Services/AdminUserServices";
import AuthContext from "./AuthContext";
import {AuthReducer, TYPES, initialState} from './AuthReducer'
import { token } from "morgan";


const AuthProvider = ({children}) => {
    const [auth, authDispatch] = useReducer(AuthReducer, initialState);
    
    const reloggedUser = async() =>{
        const token = localStorage.getItem('token');
        if(!token){
            authDispatch({
                type : TYPES.LOGOUT
            })
            console.log(token)
            return null;
        };
        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }
        };

        try {
            const {data} = await httpLocalCommon.get('user/relogged',config);
            
            authDispatch({
                type : TYPES.LOGIN,
                payload : data.user
            })

        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
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
                    authDispatch
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