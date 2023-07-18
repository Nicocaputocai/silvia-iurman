import httpLocal from '../http-local-common';
import http from '../http-common'

const service = http;

const PurchasesDataServices = {
    getAllPurchases: () => service.get('/purchases'),
    getById: (id) => service.get(`/purchases/show/${id}`),
    createPurchase: (data) => service.post('/purchases/create', data),
    editPurchase: (id, data) => service.put(`/purchases/edit/${id}`, data),
    deletePurchase: (id) => service.delete(`/purchases/delete/${id}`)
}

export default PurchasesDataServices