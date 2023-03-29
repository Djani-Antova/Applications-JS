import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

const loginTemplate = (onSubmit) => html `
<h1>Login Page</h1>
<form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Sign In</button>    
</form>
<p>Don't have an account? ><a href="/register">Sign up now!</a></p>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }) {
        await login(email, password);
        ctx.updateNav();
        ctx.page.redirect('/');
    }
}
