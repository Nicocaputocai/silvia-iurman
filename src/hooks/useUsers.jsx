import { useContext } from "react";
import UserContext from "../context/user/UserContext";

export const useUsers = () =>{

    return useContext(UserContext)
    
}
