import {useContext} from 'react'
import ActivityContext from '../context/activity/ActivityContext'

export const useActivities = () => {
  return useContext(ActivityContext)
}
