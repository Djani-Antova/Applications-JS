import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../data/offers.js';


const catalogTemplate = (offers) => html`
<section id="dashboard">
    <h2>Albums</h2>

    <ul class="card-wrapper">

        ${offers.length > 0 ? offers.map(offerCard) : html`<h2>There are no albums added yet.</h2>`}         
               
        </ul>  
       
    </section>`;

      const offerCard = (offer) => html`
   <li class="card">
        <img src=${offer.imageUrl} alt="travis" />
        <p>
          <strong>Singer/Band: </strong><span class="singer">${offer.singer}</span>
        </p>
        <p>
          <strong>Album name: </strong><span class="album">${offer.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${offer.sales}</span></p>
        <a class="details-btn" href="">Details</a>
      </li>`;

export async function catalogPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(catalogTemplate(offers));
}