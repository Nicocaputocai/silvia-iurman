import React, { useContext } from 'react'
import CourseContext from '../context/courses/CourseContext'

export const useCourses = () => {
  return useContext(CourseContext)
}
