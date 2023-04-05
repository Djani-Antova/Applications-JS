import { removeUserData, setUserData } from '../util.js';
import { methods } from './api.js';

const endPoints = {
    register: '/users/register',
    login: '/users/login',
    logout: '/users/logout',
};

export async function userLogin(data) { 
    const userData = await methods.post(endPoints.login, data);
    setUserData(userData);
}

export async function userRegister(data) {
    const userData = await methods.post(endPoints.register, data);
    setUserData(userData);
}

export async function userLogout() {
    methods.get(endPoints.logout);
    removeUserData();
}

