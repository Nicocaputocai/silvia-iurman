import CourseContext from "./CourseContext";
import { useEffect, useReducer } from 'react'
import {CourseReducer, initialState} from './CourseReducer'
import coursesDataServices from "../../Services/CoursesServices";
import { COURSE } from "../../types/TYPES";



export const CourseProvider = ({children}) => {
    const [courses, coursesDispatch] = useReducer(CourseReducer, initialState)

    const retrieveCourses = async () =>{
        const { data } = await coursesDataServices.getAllCourses()
        coursesDispatch({
            type: COURSE.GET_ALL,
            payload: data.courses,
        })
    }

    useEffect(() => {
        retrieveCourses()
    }, [])

  return (
    <CourseContext.Provider value={{courses, coursesDispatch}}>
        {children}
    </CourseContext.Provider>
  )
}
