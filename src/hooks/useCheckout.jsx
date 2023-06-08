import {useContext} from 'react'
import CheckoutContext from '../context/checkout/checkoutContext'

export const useCheckout = () => {
  return useContext(CheckoutContext)
}
