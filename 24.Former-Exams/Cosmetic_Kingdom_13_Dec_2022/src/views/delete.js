import { deleteItem } from '../api/data.js';

let ctx = null;

export async function showDelete(context, id) {
    ctx = context;
    const confirmed = confirm('Are you sure?');
    if (confirmed) {
        await deleteItem(id);
        ctx.page.redirect('/catalog');
    }
}