import httpLocal from '../http-local-common';
import http from '../http-common'

const UserDataServices ={
    register: async (data) => await httpLocal.post('/user/register', data),
    login: async (data) => await httpLocal.post('/user/login', data)
}

export default UserDataServices