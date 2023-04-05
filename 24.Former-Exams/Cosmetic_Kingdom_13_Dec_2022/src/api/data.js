import { methods } from './api.js';

const endpoints = {
    catalog: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    bought: '/data/bought',
    details: (id) => `/data/products/${id}`,
    update: (id) => `/data/products/${id}`,
    delete: (id) => `/data/products/${id}`,
    total: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    own: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export async function getAllItems() {
    return methods.get(endpoints.catalog);
}

export async function getItemById(id) {
    return methods.get(endpoints.details(id));
}

export async function createItem(data) {
    return methods.post(endpoints.create, data);
}

export async function updateItem(id, data) {
    return methods.put(endpoints.update(id), data);
}

export async function deleteItem(id) {
    return methods.delete(endpoints.delete(id));
}

export async function getAllBought(id) {
    return methods.get(endpoints.total(id));
}

export async function getMyBougth(id, userId) {
    return methods.get(endpoints.own(id, userId));
}

export async function buyItem(productId) {
    return methods.post(endpoints.bought, { productId });
}