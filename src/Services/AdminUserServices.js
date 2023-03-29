import httpLocal from '../http-local-common';
import http from '../http-common'

const AdminUserDataServices ={
    getAllAdminUsers: () => http.get('/auth/admin/profile'),
    login: (data) => http.post('/auth/admin/login', data)
}

export default AdminUserDataServices