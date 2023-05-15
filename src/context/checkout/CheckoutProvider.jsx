import { useState } from "react";
import CheckoutContext from "./checkoutContext";

const initialState = {
    product: {},
    total: 0,
    modal: false,
}

export const CheckoutProvider = ({children}) => {
  const [checkout, setCheckout] = useState(initialState);

  const addToCheckout = (product) => {
        localStorage.setItem('purchase', JSON.stringify(product._id));
        setCheckout({
            product,
            total: product.pricePesos,
            modal: true, 
        })
    }

    const closeModal = () => {
        setCheckout(initialState);
    }

  return (
    <CheckoutContext.Provider 
    value={{checkout, addToCheckout, closeModal}}>
        {children}
    </CheckoutContext.Provider>
  )
}
