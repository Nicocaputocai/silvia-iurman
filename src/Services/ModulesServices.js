import httpLocal from '../http-local-common';
import http from '../http-common'

const modulesDataServices = {
    getAllModules: () => httpLocal.get('/modules'),
    getById: (id) => httpLocal.get(`/modules/${id}`),
}

export default modulesDataServices