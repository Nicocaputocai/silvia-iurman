import { useEffect, useReducer } from "react";
import httpLocalCommon from "../http-local-common";
import AdminUserDataServices from "../Services/AdminUserServices";
import AuthContext from "./AuthContext";
import {AuthReducer, TYPES, initialState} from './AuthReducer'


const AuthProvider = ({children}) => {
    const [auth, authDispatch] = useReducer(AuthReducer, initialState);

    const reloggedUser = async() =>{
        const token = localStorage.getItem('token');
        if(!token){
            authDispatch({
                type : TYPES.LOGOUT
            })
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

/*             dispatch({
                type : TYPES.LOGIN,
                payload : data.admin
            }) */
            console.log(data);

        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
        }

    }

    useEffect(() => {
        reloggedUser()
    }, [])


    /* const [auth,setAuth] = useState({});
    const [loading, setLoading] =useState(true);

    useEffect(() => {
    const authAdmin = async() =>{
        const token = localStorage.getItem('token');
        if(!token){
            setLoading(false);
            return null;
        };
        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : token
            }
        };

        try {
            const {data} = await httpLocalCommon.get('/auth/admin/profile',config);

            setAuth(data.admin)
            
        } catch (error) {
            console.error(error);
            localStorage.removeItem('token')
        }
        finally{
            setLoading(false)
        }
    }
    authAdmin()
    }, []) */

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