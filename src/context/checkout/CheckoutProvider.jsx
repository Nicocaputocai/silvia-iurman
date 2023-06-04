import { useState } from "react";
import CheckoutContext from "./checkoutContext";
import useAuth from "../../hooks/useAuth";

const initialState = {
    product: {},
    total: 0,
    modal: false,
    type: ''
}

export const CheckoutProvider = ({children}) => {
  const [checkout, setCheckout] = useState(initialState);
  const {auth} = useAuth();

  const addToCheckout = (product, type) => {
        localStorage.setItem('purchase', JSON.stringify({
          id:product._id,
          type
        }));
        setCheckout({
            product,
            total: auth.user?.country === 'Argentina' ? product.pricePesos : product.priceDolar,
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
