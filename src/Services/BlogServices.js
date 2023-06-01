import httpLocal from '../http-local-common';
import http from '../http-common'

const service = httpLocal

const blogDataServices = {
    getAllArticles: () => service.get('/blog'),
    getById: (id) => service.get(`/blog/show/${id}`),
    createArticle: (data) => service.post('/blog/create', data),
    editArticle: (id, data) => service.put(`/blog/edit/${id}`, data),
    deleteArticle: (id) => service.delete(`/blog/delete/${id}`)
}

export default blogDataServices