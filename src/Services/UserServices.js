import httpLocal from '../http-local-common';
import http from '../http-common'

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
}

const UserDataServices ={
    register: async (data) => await http.post('/user/register', data),
    login: async (data) => await http.post('/user/login', data),
    relogin: async () => await http.get('/user/relogged', auth),
    updateUser: async (data) => await http.put('/user/update-user', data, auth),
}

export default UserDataServices