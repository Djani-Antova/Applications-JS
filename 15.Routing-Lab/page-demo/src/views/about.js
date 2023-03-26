import { html } from '../../node_modules/lit-html/lit-html.js';

const aboutTemplate = () => html `
<h1>About Us</h1>
<p>Contact: 1+555+24535</p>`;

export function aboutPage(ctx) {
    ctx.render(aboutTemplate())
}
