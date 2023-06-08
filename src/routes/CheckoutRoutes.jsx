import {Routes, Route} from 'react-router-dom'
import {Payment} from '../Components/Checkout'

export const CheckoutRoutes = () => {
  return (
      <Routes>
          <Route path='/*' >
            <Route path='payment' element={<Payment />}/>
          </Route>
      </Routes>
  )
}
