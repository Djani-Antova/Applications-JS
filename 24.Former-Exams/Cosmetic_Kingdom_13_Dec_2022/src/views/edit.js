import { getItemById, updateItem } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;
// @submit=${onEdit}
// .value=${item.} 
const editTemplate = (onEdit, item) => ctx.html`
            <section id="edit">
                <div class="form">
                    <h2>Edit Product</h2>
                    <form class="edit-form" @submit=${onEdit}>
                        <input type="text" .value=${item.name} name="name" id="name" placeholder="Product Name" />
                        <input type="text" .value=${item.imageUrl} name="imageUrl" id="product-image" placeholder="Product Image" />
                        <input type="text" .value=${item.category} name="category" id="product-category" placeholder="Category" />
                        <textarea id="product-description" .value=${item.description} name="description" placeholder="Description" rows="5"
                            cols="50"></textarea>
            
                        <input type="text" .value=${item.price} name="price" id="product-price" placeholder="Price" />
                        <button type="submit">post</button>
                    </form>
                </div>
            </section>
`;

export async function showEdit(context, itemId) {
    ctx = context;
    
    const item = await getItemById(itemId);

    ctx.render(editTemplate(createSubmitHandler(onEdit), item));

    async function onEdit(userInput, form) {

        const { name, imageUrl, category, description, price } = userInput; // Change with correct data
        await updateItem(itemId, { name, imageUrl, category, description, price });
        form.reset();
        ctx.page.redirect(`/catalog/${itemId}`);
    }
}