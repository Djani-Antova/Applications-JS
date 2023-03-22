import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';


const root = document.getElementById('wrapper');

page(decorateContext); // this is the global middleware
page('index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction)

page.start();

function decorateContext(ctx, next) { // actually this is the middleware
    ctx.render = renderView;

    next()
}


function renderView(content) {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root)

}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/')
}