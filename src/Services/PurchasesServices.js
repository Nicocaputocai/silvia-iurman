import httpLocal from '../http-local-common';
import http from '../http-common'

const PurchasesDataServices = {
    getAllPurchases: () => httpLocal.get('/purchases'),
    getById: (id) => httpLocal.get(`/purchases/show/${id}`),
    createPurchase: (data) => httpLocal.post('/purchases/create', data),
    editPurchase: (id, data) => httpLocal.put(`/purchases/edit/${id}`, data),
    deletePurchase: (id) => httpLocal.delete(`/purchases/delete/${id}`)
}

export default PurchasesDataServices