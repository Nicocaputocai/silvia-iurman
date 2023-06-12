import { useEffect, useReducer } from 'react';
import UserContext from './UserContext';
import { initialState, UserReducer } from './UserReducer';
import { USER } from '../../types/TYPES';
import UserDataServices from '../../Services/UserServices';

export const UserProvider = ({children}) =>{
    const [users, usersDispatch] = useReducer(UserReducer, initialState);

    const retrieveUsers = async () =>{
        const {data} = await UserDataServices.getConstellators();
        usersDispatch({type: USER.GET_ALL, payload: data.constellators})
    };
    useEffect(() =>{
        retrieveUsers();
    }, []);

    
    return(
        <UserContext.Provider value={{users,usersDispatch}}>
            {children}
        </UserContext.Provider>
    )
}