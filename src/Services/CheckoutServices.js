import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const service = httpLocal;

const CheckoutServices = {
    mp: (data) => service.post('/checkout/mp', data, auth),
    pp: (data) => service.post('/checkout/pp', data, auth),
    getStatusMP: (data) => service.post('/checkout/mp/status', data, auth),
    getStatusPP: (data) => service.post('/checkout/pp/status', data, auth),
}

export default CheckoutServices