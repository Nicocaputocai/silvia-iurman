import httpLocal from '../http-local-common';
import http from '../http-common'

const service = httpLocal

const activitiesDataServices = {
    getAllActivities: () => service.get('/activities'),
    getById: (id) => service.get(`/activities/show/${id}`),
    createActivity: (data) => service.post('/activities/create', data),
    editActivity: (id, data) => service.put(`/activities/edit/${id}`, data),
    deleteActivity: (id) => service.delete(`/activities/delete/${id}`)
}

export default activitiesDataServices