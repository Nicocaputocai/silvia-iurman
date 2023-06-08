//reducer for courses

import {COURSE} from '../../types/TYPES'

export const initialState = {
    data: [],
    isLoading: true,
}

export const CourseReducer = (state, action) => {
    switch(action.type){
        case COURSE.GET_ALL:
            return {
                isLoading: false,
                data: action.payload
            }
        case COURSE.ADD:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case COURSE.DELETE:
            return {
                ...state,
                data: state.data.filter(activity => activity._id !== action.payload)
            }
        case COURSE.EDIT:
            return {
                ...state,
                data: state.data.map(activity => activity._id === action.payload._id ? action.payload : activity)
            }
        default:
            return state;
    }
}