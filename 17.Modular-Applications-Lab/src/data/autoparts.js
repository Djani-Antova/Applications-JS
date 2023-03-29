import { get } from './api.js';


const endpoints = {
    catalog: '/data/autoparts',
    byId: '/data/autoparts/'
};

export async function getParts() {
    return get(endpoints.catalog);
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function deleteById(id) {
    return del(endpoints.byId + id);
}