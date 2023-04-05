import { getUserData } from '../util.js';

let ctx = null;

export function addUserState(context, next) {
    ctx = context;
    ctx.userData = getUserData();
    next();
}