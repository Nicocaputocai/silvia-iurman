import httpLocal from '../http-local-common';
import http from '../http-common'
import { cookies } from '../config/cookies';

const auth = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': cookies.get('token')
    }
}

const authFormData = {
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': cookies.get('token')
    }
}
const service = httpLocal;

const UserDataServices ={
    register: async (data) => await service.post('/user/register', data),
    login: async (data) => await service.post('/user/login', data),
    relogin: async () => await service.get('/user/relogged', auth),
    updateUser: async (data) => await service.put('/user/update-user', data, auth),
    updateAvatarUser: async (image) => await service.put('/user/update-avatar-user', image, authFormData),
    confirmUser: async (uuid) => await service.get(`/user/confirm/${uuid}`, auth),
    recovery:  async (email) => await service.post('/user/recovery', email),
    recoveryPassword: async (data) => await service.post('/user/recovery-password', data),
    googleLogin: async (data) => await service.post('/user/google-login', data),
    getConstellators: async () => await service.get('/user/constellators')
}


export default UserDataServices