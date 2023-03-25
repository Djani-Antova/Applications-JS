import { html, render } from '../node_modules/lit-html/lit-html.js'

import { data, products } from './data.js';
import { dom } from './dom.js';
import { getTemplate } from './templating.js';

const userBlock = (user) => html`
<article class='user-block' data-id="12345">
    <span style="background-color: red">Username: ${user.name}</span>
    <span>Phone: ${user.phone}</span>
</article>
`

const productTemplate = (product) => html`
<div class="product">
    <span style=${'color: ' + product.color}>Label: ${product.label}</span>
    <span>Price: $${product.price}</span>
    <input type="number" .value = ${product.qty}>
    <button ?disabled=${product.qty == 0} @click=${() => buyProduct(product)}>Buy</button>
    ${product.qty == 0 
     ? html`<span>Out of stock</span>`
     : html `<span>Free shiping available</span>`

    }
</div>
`;


const greetingTemplate = (name) => html`<h2>Hello, ${name}!</h2>`

const head = document.querySelector('header');
const main = document.querySelector('main');
const list = document.getElementById('products')

window.head = null;

document.querySelector('button').addEventListener('click', () => {
    render(greetingTemplate('Peter'), head)
})


start()

async function start() {
    render(greetingTemplate('Guest'), head)
    render(data.map(userBlock), main)
    render(products.map(productTemplate), list)

    window.head = document.querySelector('h2')
}

function buyProduct(product) {
alert(`You bought ${product.label} for $${product.price}`)
}


