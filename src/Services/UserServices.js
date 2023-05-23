import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const UserDataServices ={
    register: async (data) => await httpLocal.post('/user/register', data),
    login: async (data) => await httpLocal.post('/user/login', data),
    relogin: async () => await httpLocal.get('/user/relogged', auth),
    updateUser: async (data) => await httpLocal.put('/user/update-user', data, auth),
}

export default UserDataServices