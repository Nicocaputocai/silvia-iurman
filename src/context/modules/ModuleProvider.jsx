import {useEffect, useReducer} from 'react'
import ModuleContext from "./ModuleContext";
import {initialState, ModuleReducer} from './ModuleReducer';
import {MODULE} from '../../types/TYPES'
import modulesDataServices from '../../Services/ModulesServices';

export const ModulesProvider = ({children}) => {
    const [modules, modulesDispatch] = useReducer(ModuleReducer, initialState);

    const retrieveModules = async () =>{
        const {data} = await modulesDataServices.getAllModules()
        modulesDispatch({type: MODULE.GET_ALL, payload: data.modules})  
    };

    useEffect(() =>{
        retrieveModules()
    }, []);

  return (
    <ModuleContext.Provider value={{modules, modulesDispatch}}>
        {children}
    </ModuleContext.Provider>
  )
}
