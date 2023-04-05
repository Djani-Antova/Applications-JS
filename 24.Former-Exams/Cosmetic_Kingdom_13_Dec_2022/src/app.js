import { page } from './lib.js';
import { addHtmlRender } from './middleware/addHtmlRender.js';
import { addUserState } from './middleware/addUserState.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';


// Decorate context with middleware
page(addUserState);
page(addHtmlRender);

page('/index.hmtl', '/');
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);

// Start application
page.start();