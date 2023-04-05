import { buyItem, getItemById, getMyBougth, getAllBought } from '../api/data.js';
import { showDelete } from './delete.js';
import { showEdit } from './edit.js';

let ctx = null;
// @click=${() => showDelete(ctx, itemDetails._id)} href="javascript:void(0)" 
// @click=${() => showEdit(ctx, itemDetails._id)} href="javascript:void(0)"
// ${itemDetails.}
// ${isOwner ? ctx.html`` : null}
const detailsTemplate = (itemDetails, myBoughtCount, totalBought, buyCurrentItem, isOwner) => ctx.html`
        <section id="details">
            <div id="details-wrapper">
                <img id="details-img" src="${itemDetails.imageUrl}" alt="example1" />
                <p id="details-title">${itemDetails.name}</p>
                <p id="details-category">
                    Category: <span id="categories">${itemDetails.category}</span>
                </p>
                <p id="details-price">
                    Price: <span id="price-number">${itemDetails.price}</span>$</p>
                <div id="info-wrapper">
                    <div id="details-description">
                        <h4>Bought: <span id="buys">${totalBought}</span> times.</h4>
                        <span>${itemDetails.description}</span>
                    </div>
                </div>
                ${ctx.userData !== null 
                ? ctx.html`
                    <div id="action-buttons">
                    ${isOwner 
                        ? ctx.html`
                            <a @click=${() => showEdit(ctx, itemDetails._id)} href="javascript:void(0)" id="edit-btn">Edit</a>
                            <a @click=${() => showDelete(ctx, itemDetails._id)} href="javascript:void(0)"  id="delete-btn">Delete</a>` 
                        : myBoughtCount === 0 
                            ? ctx.html`<a @click=${buyCurrentItem} href="javascript:void(0)" id="buy-btn">Buy</a>` 
                            : null}
                    </div>`  
                : null}
            </div>
        </section>
`;

export function showDetails(context) {
    ctx = context;
    const itemId = ctx.params.id;
    update();

    async function buyCurrentItem() {
        await buyItem(itemId);
        update();
    }

    async function update() {
        const itemDetails = await getItemById(itemId);
        const totalBought = await getAllBought(itemId);
        const isOwner = ctx.userData?._id === itemDetails._ownerId;

        let myBoughtCount = 0;
        const userId = ctx.userData?._id;
        if (userId) {
            myBoughtCount = await getMyBougth(itemId, userId);
        }

        ctx.render(detailsTemplate(itemDetails, myBoughtCount, totalBought, buyCurrentItem, isOwner));
    }
}