import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteById, getById } from '../data/autoparts.js';
import { getUserData } from '../util.js';

const detailsTemplate = (data, onDelete) => html`
<h1>Details Page</h1>
<p>S/N: ${data._id}</p>
<p>Part Label: ${data.label}</p>
<p>Unit Price: $${data.price}</p>
<p>In Stock: ${data.qry}</p>
${data.canEdit ?  html`
<a href="/catalog/${data._id}/edit">Edit</a>
<a @click=${onDelete} href="javascript:void()">Delete</a>` : null}`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;

    const data = await getById(id);

    const userData = getUserData();
    if(userData) {
        data.canEdit = userData._id == data._ownerId;
    }

    ctx.render(detailsTemplate(data, onDelete))

    async function onDelete(){
        const choice = confirm(`Are you sure you want to delete part ${data.label}?`)

        if(choice) {
            await deleteById(id);
            ctx.page.redirect('/catalog')
        }
    }

}
