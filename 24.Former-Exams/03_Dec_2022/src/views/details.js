import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getAllOffers, getById } from '../data/offers.js';
import { getUserData } from '../util.js';


const detailsTemplate = (offer) => html`
<section id="details">
  <div id="details-wrapper">
    <p id="details-title">Album Details</p>
    <div id="img-wrapper">
      <img src=${offer.imageUrl} alt="example1" />
    </div>
    <div id="info-wrapper">
      <p><strong>Band:</strong><span id="details-singer">${offer.singer}</span></p>
      <p>
        <strong>Album name:</strong><span id="details-album">${offer.album}</span>
      </p>
      <p><strong>Release date:</strong><span id="details-release">${offer.release}</span></p>
      <p><strong>Label:</strong><span id="details-label">${offer.label}</span></p>
      <p><strong>Sales:</strong><span id="details-sales">${offer.sales}</span></p>
    </div>
    <div id="likes">Likes: <span id="likes-count">0</span></div>

    <!--Edit and Delete are only for creator-->


    <div id="action-buttons">
      ${offer.canEdit ? html`
      <a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
      <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}

    </div>

  </div>
</section>`

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const offer = await getById(id);

  const userData = getUserData();
  //offer.canEdit   => we create a property 'canEdit'
  if (userData && userData._id == offer._ownerId) {
    offer.canEdit = true;

  }
  ctx.render(detailsTemplate(offer, onDelete));
  
  async function onDelete() {
    const choice = confirm('Are you sure?')

    if (choice) {
      await deleteOffer(id)
      ctx.page.redirect('/catalog')

    }
  }
  
}