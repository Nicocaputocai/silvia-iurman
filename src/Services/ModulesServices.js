import httpLocal from '../http-local-common';
import http from '../http-common'

const modulesDataServices = {
    getAllModules: () => http.get('/modules'),
    getById: (id) => http.get(`/modules/${id}`),
}

export default modulesDataServices