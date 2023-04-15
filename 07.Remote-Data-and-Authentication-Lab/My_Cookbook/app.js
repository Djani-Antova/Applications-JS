

window.addEventListener('load', () => {

    async function cookBook() {
        const url = 'http://localhost:3030/jsonstore/cookbook/recipes';

        const res = await fetch(url);
        const data = await res.json()
        //console.log(data);
        const recipes = Object.entries(data)

        for (let i = 0; i < recipes.length; i++) {
            const currentRecipe = recipes[i];
            // console.log(currentRecipe[1].name);
            // console.log(currentRecipe[1].img);

            const main = document.querySelector('main');
            const loading = main.querySelector('p');
            loading.textContent = '';

            const article = createElement('article', main, { class: 'preview' });

            const title = createElement('div', article, { class: 'title' });
            const h2 = createElement('h2', title);
            h2.textContent = currentRecipe[1].name;

            const small = createElement('div', article, { class: 'small' });
            createElement('img', small, { src: currentRecipe[1].img });

        }


    }

    function createElement(type, parent, attributes = {}, children = []) {
        const element = document.createElement(type);

        for (const [key, value] of Object.entries(attributes)) {
            if (key === 'class') {
                element.setAttribute('class', value);
            } else {
                element.setAttribute(key, value);
            }
        }

        for (const child of children) {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    cookBook()


})


