import { useContext } from "react"
import AdminContext from "../context/admin/AdminContext"


const useAdmin = () =>{
    return useContext(AdminContext)
}

export default useAdmin