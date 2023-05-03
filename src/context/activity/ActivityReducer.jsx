import {ACTIVITY} from '../../types/TYPES'

export const initialState = {
    data: [],
    isLoading: true,
}

export const ActivityReducer = (state, action) => {
    switch(action.type){
        case ACTIVITY.GET_ALL:
            return {
                isLoading: false,
                data: action.payload
            }
        case ACTIVITY.ADD:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case ACTIVITY.DELETE:
            return {
                ...state,
                data: state.data.filter(activity => activity._id !== action.payload)
            }
        case ACTIVITY.EDIT:
            return {
                ...state,
                data: state.data.map(activity => activity._id === action.payload._id ? action.payload : activity)
            }
        default:
            return state;
    }
}