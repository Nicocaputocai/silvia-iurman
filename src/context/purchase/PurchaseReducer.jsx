import { PURCHASE } from "../../types/TYPES";

export const initialState={
    data: [],
    isLoading: true
};

export const PurchaseReducer = (state, action) =>{
    switch (action.type) {
        case PURCHASE.GET_ALL:
            return{
                isLoading: false,
                data: action.payload  
            }

        case PURCHASE.ADD:
            return{
                ...state,
                data: [...state.data, action.payload]
            }
        
        case PURCHASE.EDIT:
            return{
                ...state,
                data: state.data.map(purchase => purchase._id === action.payload ? action.payload : purchase)
            }
    
        default:
            return state
    }
}