import { html, render } from '../node_modules/lit-html/lit-html.js'

const root = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`
function getTowns(event) {
    event.preventDefault();

    if (document.getElementById('towns').value != '') {
        const towns = document.getElementById('towns').value.split(', ')
        // const ul = document.createElement('ul')
        const result = listTemplate(towns)

        render(result, root);
    }



    document.getElementById('towns').value = ''
}