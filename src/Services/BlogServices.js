import httpLocal from '../http-local-common';
import http from '../http-common'

const blogDataServices = {
    getAllArticles: () => http.get('/blog'),
    getById: (id) => http.get(`/blog/show/${id}`),
    createArticle: (data) => http.post('/blog/create', data),
    editArticle: (id, data) => http.put(`/blog/edit/${id}`, data),
    deleteArticle: (id) => http.delete(`/blog/delete/${id}`)
}

export default blogDataServices