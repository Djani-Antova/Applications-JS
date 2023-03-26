import { html } from '../../node_modules/lit-html/lit-html.js';
import { getParts } from '../data/autoparts.js';

const catalogTemplate = (list) => html `
<h1>Catalog Page</h1>
<ul>${list.map(productTemplate)}</ul>`;

const productTemplate = (item) => html`
<li><a href="/catalog/${item._id}">${item.label}</li></a>`;

export async function catalogPage(ctx) {
    
    const list = await getParts();

    ctx.render(catalogTemplate(list))
}
