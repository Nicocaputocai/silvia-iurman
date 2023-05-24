import httpLocal from '../http-local-common';
import http from '../http-common'

const PurchasesDataServices = {
    getAllPurchases: () => http.get('/purchases'),
    getById: (id) => http.get(`/purchases/show/${id}`),
    createPurchase: (data) => http.post('/purchases/create', data),
    editPurchase: (id, data) => http.put(`/purchases/edit/${id}`, data),
    deletePurchase: (id) => http.delete(`/purchases/delete/${id}`)
}

export default PurchasesDataServices