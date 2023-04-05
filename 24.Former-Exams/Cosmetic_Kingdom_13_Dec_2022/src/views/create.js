import { createItem } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;
// @submit=${onCreate}
const createTemplate = (onCreate) => ctx.html`
        <section id="create">
            <div class="form">
                <h2>Add Product</h2>
                <form class="create-form" @submit=${onCreate}>
                    <input type="text" name="name" id="name" placeholder="Product Name" />
                    <input type="text" name="imageUrl" id="product-image" placeholder="Product Image" />
                    <input type="text" name="category" id="product-category" placeholder="Category" />
                    <textarea id="product-description" name="description" placeholder="Description" rows="5"
                        cols="50"></textarea>
        
                    <input type="text" name="price" id="product-price" placeholder="Price" />
        
                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
`;

export function showCreate(context) {
    ctx = context;

    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate(userInput, form) {

        const { name, imageUrl, category, description, price } = userInput; // Change with correct data
        await createItem({ name, imageUrl, category, description, price });
        form.reset();
        ctx.page.redirect('/catalog');
    }
}