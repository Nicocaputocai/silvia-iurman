import {useEffect, useReducer} from 'react'
import ActivityContext from "./ActivityContext";
import {initialState, ActivityReducer} from './ActivityReducer';
import {ACTIVITY} from '../../types/TYPES'
import activitiesDataServices from '../../Services/ActivitiesServices';

export const ActivityProvider = ({children}) => {
    const [activities, activitiesDispatch] = useReducer(ActivityReducer, initialState);

    const retrieveActivities = async () =>{
        const {data} = await activitiesDataServices.getAllActivities()
        activitiesDispatch({type: ACTIVITY.GET_ALL, payload: data.activities})  
    };

    useEffect(() =>{
        retrieveActivities()
    }, []);

  return (
    <ActivityContext.Provider value={{activities, activitiesDispatch}}>
        {children}
    </ActivityContext.Provider>
  )
}
