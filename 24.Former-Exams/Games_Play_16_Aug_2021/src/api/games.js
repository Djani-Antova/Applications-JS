import * as api from './api.js';

const endpoints = {

    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    games: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    byId: '/data/games/',
    deleteById: '/data/games/',
    update: '/data/games/'

    
}

export async function getRecent() { //after creation can be tested in app.js
    return api.get(endpoints.recent)
}

export async function getAll() {    //after creation can be tested in app.js
    return api.get(endpoints.games)
}

export async function getById(id) {
    return api.get(endpoints.byId + id)
}

export async function create(data) {    //after creation can be tested in app.js
    return api.post(endpoints.create, data)
}

export async function update(id, data) {
    return api.put(endpoints.update + id, data) 
}

export async function deleteById(id) {
    return api.del(endpoints.deleteById + id)
}