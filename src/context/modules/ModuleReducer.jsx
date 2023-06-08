import {MODULE} from '../../types/TYPES'

export const initialState = {
    data: [],
    isLoading: true,
}

export const ModuleReducer = (state, action) => {
    switch(action.type){
        case MODULE.GET_ALL:
            return {
                isLoading: false,
                data: action.payload
            }
        case MODULE.EDIT:
            return {
                ...state,
                data: state.data.map(modulo => modulo._id === action.payload._id ? action.payload : modulo)
            }
        default:
            return state;
    }
}