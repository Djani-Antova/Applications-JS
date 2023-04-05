import { userRegister } from '../api/users.js';
import { alertMessageFn, createSubmitHandler } from '../util.js';

let ctx = null;
// @submit=${onRegister}
const registerTemplate = (onRegister) => ctx.html`
          <section id="register">
            <div class="form">
              <h2>Register</h2>
              <form class="register-form" @submit=${onRegister}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="#">Login</a></p>
              </form>
            </div>
          </section>
`;

export function showRegister(context) {
  ctx = context;
  ctx.render(registerTemplate(createSubmitHandler(onRegister)));

  async function onRegister(userInput, form) {

    const rePass = userInput['re-password']; // Change with correct value

    if (userInput.password !== rePass) {
      return alertMessageFn('The password does not match!');
    }

    const { email, password } = userInput;
    await userRegister({ email, password });
    form.reset();
    ctx.page.redirect('/catalog');
  }
}