// import { useEffect, useState } from 'react'
// import modulesDataServices from '../Services/ModulesServices';

// export const useModules = () => {
//     const [modules, setModules] = useState({
//         data: [],
//         isLoading: true,
//       });

//       const getAllModules = async () => {
//         try {
//             const response = await modulesDataServices.getAllModules();
//             setModules({
//                 data: response.data.modules,
//                 isLoading: false,
//                 });
//         } catch (error) {
//             console.log(error);
//         }
//         };
    
//       useEffect(() => {
//         getAllModules();
//       }, []);
//       return {
//         modules
//       }
// }

import {useContext} from 'react'
import ModuleContext from '../context/modules/ModuleContext'

export const useModules = () => {
  return useContext(ModuleContext)
}
