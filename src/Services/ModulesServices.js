import httpLocal from '../http-local-common';
import http from '../http-common'

const service = httpLocal;

const modulesDataServices = {
    getAllModules: () => service.get('/modules'),
    getById: (id) => service.get(`/modules/${id}`),
    editModule: (id, data) => service.put(`/modules/edit/${id}`, data)
}

export default modulesDataServices