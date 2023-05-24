import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const service = http

const UserDataServices ={
    register: async (data) => await service.post('/user/register', data),
    login: async (data) => await service.post('/user/login', data),
    relogin: async () => await service.get('/user/relogged', auth),
    updateUser: async (data) => await service.put('/user/update-user', data, auth),
}

export default UserDataServices