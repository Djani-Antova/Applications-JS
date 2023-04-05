import { alertMessageFn, getUserData, removeUserData } from '../util.js';

const HOST = 'http://localhost:3030';

async function request(method, endpoint, data) {
    const options = {
        method,
        headers: {},
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const token = getUserData()?.accessToken;
    if (token) {
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(HOST + endpoint, options);
        if (response.ok === false) {
            if (response.status === 403) {
                removeUserData();
            }

            const error = await response.json();
            throw new Error(error.message);
        }

        return response.status === 204 ? response : response.json();
    } catch (error) {
        alertMessageFn(error.message);
        throw error;
    }
}

export const methods = {
    get: (endpoint) => request('GET', endpoint),
    post: (endpoint, data) => request('POST', endpoint, data),
    put: (endpoint, data) => request('PUT', endpoint, data),
    delete: (endpoint) => request('DELETE', endpoint),
};