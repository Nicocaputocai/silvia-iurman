import { useEffect, useReducer } from 'react';
import PurchaseContext from './PurchaseContext';
import { initialState, PurchaseReducer } from './PurchaseReducer';
import { PURCHASE } from '../../types/TYPES';
import PurchasesDataServices from '../../Services/PurchasesServices';

export const PurchaseProvider = ({children}) =>{
    const [purchases, purchasesDispatch] = useReducer(PurchaseReducer, initialState);

    const retrievePurchases = async () =>{
        const {data} = await PurchasesDataServices.getAllPurchases();
        purchasesDispatch({type: PURCHASE.GET_ALL, payload: data.purchases})
    };
    useEffect(() =>{
        retrievePurchases();
    }, []);

    
    return(
        <PurchaseContext.Provider value={{purchases,purchasesDispatch}}>
            {children}
        </PurchaseContext.Provider>
    )
}