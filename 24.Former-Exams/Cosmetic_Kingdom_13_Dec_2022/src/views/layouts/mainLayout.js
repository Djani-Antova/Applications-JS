import { logout } from '../logout.js';
// Get everything from html with no body
// @click=${() => logout(ctx)} href="javascript:void(0)"
// ${ctx.userData !== null ? ctx.html``: ctx.html``}
export const mainLayout = (ctx, content) => ctx.html`
<div id="wrapper">
    <header>
        <!-- Navigation -->
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

        <nav>
            <div>
                <a href="/catalog">Products</a>
            </div>
            ${ctx.userData !== null 
                ? ctx.html`
                <div class="user">
                    <a href="/create">Add Product</a>
                    <a @click=${() => logout(ctx)} href="javascript:void(0)">Logout</a>
                </div>`
                : ctx.html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}
        </nav>
    </header>

    <main>
      ${content}
    </main>
</div>
<footer>
    <p>@CosmeticKingdom</p>
</footer>
`;