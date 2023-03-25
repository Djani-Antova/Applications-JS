import { render, html } from './node_modules/lit-html/lit-html.js'
import { contacts } from './contacts.js'

const contactTemplate = (user) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${user.name}</h2>
        <button class="detailsBtn">Details</button>
        <div class="details" id=${user.id}>
            <p>Phone number: ${user.phoneNumber}</p>
            <p>Email: ${user.email}</p>
        </div>
    </div>
</div>`;
console.log(typeof contactTemplate);

const root = document.getElementById('contacts');
render(contacts.map(contactTemplate), root)

root.addEventListener('click', (event) => {
    if (event.target.classList.contains("detailsBtn")) {
        const info = event.target.parentElement.getElementsByClassName('details')[0]
        if (info.style.display == 'block') {
            info.style.display = 'none'
        } else {
            info.style.display = 'block'
        }
    }
})
