import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const CheckoutServices = {
    mp: (data) => httpLocal.post('/checkout/mp', data, auth),
    pp: (data) => httpLocal.post('/checkout/pp', data),
    getStatusMP: (data) => httpLocal.post('/checkout/mp/status', data, auth),
    getStatusPP: (data) => httpLocal.post('/checkout/pp/status', data, auth),
}

export default CheckoutServices