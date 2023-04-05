import { getAllItems } from '../api/data.js';

let ctx = null;
// ${allItems.length === 0 ? ctx.html`` : allItems.map(itemCard)}
const catalogTemplate = (allItems) => ctx.html`
        <h2>Products</h2>
        <section id="dashboard">
        ${allItems.length === 0 
            ? ctx.html`<h2>No products yet.</h2>` 
            : allItems.map(itemCard)}
        </section>        
`;
// ${item.}
// /catalog/${item._id} ---> Details
const itemCard = (item) => ctx.html`
<div class="product">
    <img src=${item.imageUrl} alt="${item.imageUrl}" />
    <p class="title">${item.name}</p>
    <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
</div>
`;

export async function showCatalog(context) {
    ctx = context;
    const allItems = await getAllItems();

    ctx.render(catalogTemplate(allItems));
}