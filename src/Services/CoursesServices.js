import httpLocal from '../http-local-common';
import http from '../http-common'

const coursesDataServices = {
    getAllCourses: () => http.get('/courses'),
    getById: (id) => http.get(`/courses/show/${id}`),
    getByName: (name) => http.get(`/courses/show/${name}`),
    createCourse: (data) => http.post('/courses/create', data),
    editCourse: (id, data) => http.put(`/courses/edit/${id}`, data),
    deleteCourse: (id) => http.delete(`/courses/delete/${id}`)
}

export default coursesDataServices