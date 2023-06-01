import httpLocal from '../http-local-common';
import http from '../http-common'

const service = http

const modulesDataServices = {
    getAllModules: () => service.get('/modules'),
    getById: (id) => service.get(`/modules/${id}`),
}

export default modulesDataServices