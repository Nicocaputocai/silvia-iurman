import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const CheckoutServices = {
    mp: (data) => http.post('/checkout/mp', data, auth),
    pp: (data) => http.post('/checkout/pp', data),
    getStatusMP: (data) => http.post('/checkout/mp/status', data, auth),
    getStatusPP: (data) => http.post('/checkout/pp/status', data, auth),
}

export default CheckoutServices