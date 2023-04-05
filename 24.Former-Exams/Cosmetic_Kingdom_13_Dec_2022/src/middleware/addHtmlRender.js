import { mainLayout } from '../views/layouts/mainLayout.js';
import { html, render } from '../lib.js';

let ctx = null;
const bodyDomElement = document.body;

export function addHtmlRender(context, next) {
    ctx = context;
    ctx.html = html;
    ctx.render = customRender;
    next();
}

function customRender(template) {
    render(mainLayout(ctx, template), bodyDomElement);
}