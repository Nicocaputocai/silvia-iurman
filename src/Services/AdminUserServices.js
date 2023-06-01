import httpLocal from '../http-local-common';
import http from '../http-common'

const service = http

const AdminUserDataServices ={
    getAllAdminUsers: () => service.get('/auth/admin/profile'),
    login: (data) => service.post('/auth/admin/login', data)
}

export default AdminUserDataServices