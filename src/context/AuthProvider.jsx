import { createContext, useEffect, useState } from "react";
import httpLocalCommon from "../http-local-common";
import AdminUserDataServices from "../Services/AdminUserServices";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({});
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
    }, [])

    return (
        <AuthContext.Provider
            value={
                {
                    auth,
                    setAuth,
                    loading
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