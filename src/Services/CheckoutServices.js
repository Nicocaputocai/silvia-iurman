import httpLocal from '../http-local-common';
import http from '../http-common'

const CheckoutServices = {
    mp: (data) => httpLocal.post('/checkout/mp', data),
    pp: (data) => httpLocal.post('/checkout/pp', data),
    getStatusMP: (data) => httpLocal.post('/checkout/mp/status', data,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }),
    getStatusPP: (data) => httpLocal.post('/checkout/pp/status', data,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    }),
}

export default CheckoutServices