import httpLocal from '../http-local-common';
import http from '../http-common'

const service = httpLocal;

const coursesDataServices = {
    getAllCourses: () => service.get('/courses'),
    getById: (id) => service.get(`/courses/show/${id}`),
    getByName: (name) => service.get(`/courses/show/${name}`),
    createCourse: (data) => service.post('/courses/create', data),
    editCourse: (id, data) => service.put(`/courses/edit/${id}`, data),
    deleteCourse: (id) => service.delete(`/courses/delete/${id}`)
}

export default coursesDataServices