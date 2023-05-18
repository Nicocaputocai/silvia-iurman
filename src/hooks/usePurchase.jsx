import {useContext} from 'react'
import PurchaseContext from "../context/purchase/PurchaseContext";

export const usePurchases = () => {
    return useContext(PurchaseContext)
}