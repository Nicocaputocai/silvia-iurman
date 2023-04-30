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
        default:
            return state;
    }
}