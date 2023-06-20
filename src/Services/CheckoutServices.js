import httpLocal from '../http-local-common';
import http from '../http-common'
import { cookies } from '../config/cookies';

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': cookies.get('token')
    }
}
const service = http;

const CheckoutServices = {
    mp: async (data) => await service.post('/checkout/mp', data, auth),
    pp: async (data) => await service.post('/checkout/pp', data, auth),
    getStatusMP: async (data) => await service.post('/checkout/mp/status', data, auth),
    getStatusPP: async (data) => await service.post('/checkout/pp/status', data, auth),
    transfer: async (data) => await service.post('/checkout/transfer', data, auth),
    confirmTransfer: async (data) => await service.post('/checkout/transfer-confirm', data, auth),
}

export default CheckoutServices