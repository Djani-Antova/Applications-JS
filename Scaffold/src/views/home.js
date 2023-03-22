import { html } from '../../node_modules/lit-html/lit-html.js';

//TODO Replace with actual view
const homeTemplate = () => html`
<h1>Home page</h1>
<p>Welcome to our site</p>`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}