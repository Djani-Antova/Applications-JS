import { userLogout } from '../api/users.js';

let ctx = null;

export async function logout(context) {
    ctx = context;
    userLogout();
    ctx.page.redirect('/catalog');
}