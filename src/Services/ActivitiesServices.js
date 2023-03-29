import httpLocal from '../http-local-common';
import http from '../http-common'

const activitiesDataServices = {
    getAllActivities: () => http.get('/activities'),
    getById: (id) => http.get(`/activities/show/${id}`),
    createActivity: (data) => http.post('/activities/create', data),
    editActivity: (id, data) => http.put(`/activities/edit/${id}`, data),
    deleteActivity: (id) => http.delete(`/activities/delete/${id}`)
}

export default activitiesDataServices