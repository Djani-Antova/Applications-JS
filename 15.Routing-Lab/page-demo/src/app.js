import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { getUserData } from './util.js';
import { aboutPage } from './views/about.js';
import { catalogPage } from './views/catalog.js';
import { detailsPage } from './views/details.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';



page(addRender);
page((ctx, next) => { ctx.updateNav = updateNav; next();} );

page('/index.html', '/')
page('/', homePage); 
page('/catalog', catalogPage); 
page('/catalog/:id', detailsPage); 
page('/catalog/:id/edit', () => console.log('edit page')); 
page('/about', aboutPage); 
page('/login', loginPage); 
page('/register', registerPage); 

updateNav();

page.start();

function updateNav() {
    const userData = getUserData();
    if(userData != null) {
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
    } else {
        document.querySelectorAll('.guest').forEach(e => e.style.display = '');
    }
}


