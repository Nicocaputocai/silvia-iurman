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
        case ACTIVITY.DELETE:
            return {
                ...state,
                data: state.data.filter(activity => activity._id !== action.payload)
            }
        default:
            return state;
    }
}