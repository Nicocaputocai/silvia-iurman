import { useEffect, useState } from "react";
import httpLocalCommon from "../../http-local-common";
import AdminContext from "./AdminContext";

export const AdminProvider = ({children}) => {
    const [admin,setAdmin] = useState({});
    const [loading, setLoading] =useState(true);

    useEffect(() => {
    const authAdmin = async() =>{
        const token = localStorage.getItem('tokenAdmin');
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
            localStorage.removeItem('tokenAdmin')
        }
        finally{
            setLoading(false)
        }
    }
    authAdmin()
    }, [])

    return (
        <AdminContext.Provider value={[admin, setAdmin, loading]}>
            {children}
        </AdminContext.Provider>
    )
}