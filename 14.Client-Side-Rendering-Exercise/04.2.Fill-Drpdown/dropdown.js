import { render, html } from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const menu = document.getElementById('menu');
const form = document.getElementById('form');
const input = document.getElementById('itemText');

const townTemplate = (data) => html`
  ${data.map(town => html`
    <option value="${town._id}">${town.text}</option>
  `)}
`;

getItem();

async function getItem() {
    const res = await fetch(url);
    const data = await res.json();
    const towns = Object.values(data);

    const result = townTemplate(towns)
    render(result, menu);

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const newInput = input.value;
        if (newInput !== '') {
            const res = postItem(url, { text: newInput });
            const newTown = { _id: res._id, text: newInput };
            towns.push(newTown);
            render(townTemplate(towns), menu);
            input.value = '';
        };
    });
}

async function postItem(url, data) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await res.json();
  
    return result;
}