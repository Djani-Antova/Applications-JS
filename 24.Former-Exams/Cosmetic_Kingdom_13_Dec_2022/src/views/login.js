import { userLogin } from '../api/users.js';
import { createSubmitHandler } from '../util.js';

let ctx = null;
// @submit=${onLogin}
const loginTemplate = (onLogin) => ctx.html`
        <section id="login">
            <div class="form">
                <h2>Login</h2>
                <form class="login-form" @submit=${onLogin}>
                    <input type="text" name="email" id="email" placeholder="email" />
                    <input type="password" name="password" id="password" placeholder="password" />
                    <button type="submit">login</button>
                    <p class="message">
                        Not registered? <a href="#">Create an account</a>
                    </p>
                </form>
            </div>
        </section>
`;

export function showLogin(context) {
    ctx = context;

    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin(userInput, form) {

        const { email, password } = userInput; // Change with correct data
        await userLogin({ email, password });
        form.reset();
        ctx.page.redirect('/catalog');
    }
}