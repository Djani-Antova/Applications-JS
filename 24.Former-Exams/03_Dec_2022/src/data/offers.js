//CRUD from catalog and rendering offers
import { del, get, post, put } from "./api.js";


const endpoints = {
    catalog: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums/',
    byId: '/data/albums/'    
}

export async function getAllOffers() {
    return get(endpoints.catalog)
}

export async function getById(id) {
    return get(endpoints.byId + id)
}

export async function createOffer(data) { ///!!!
    return post(endpoints.create, data)
}

export async function updateOffer(id, data) {
    return put(endpoints.byId + id, data)
}

export async function deleteOffer(id) {
    return del(endpoints.byId + id)
}

