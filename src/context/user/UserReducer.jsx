import { USER } from "../../types/TYPES";

export const initialState={
    data: [],
    isLoading: true
};

export const UserReducer = (state, action) =>{
    switch (action.type) {
        case USER.GET_ALL:
            return{
                isLoading: false,
                data: action.payload  
            }
    
        default:
            return state
    }
}