import httpLocal from '../http-local-common';
import http from '../http-common'

const service = httpLocal;

const AdminUserDataServices ={
    getAllAdminUsers: () => service.get('/auth/admin/profile'),
    login: (data) => service.post('/auth/admin/login', data)
}

export default AdminUserDataServices