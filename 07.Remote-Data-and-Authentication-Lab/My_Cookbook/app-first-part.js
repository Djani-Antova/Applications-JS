const baseUrl = 'http://localhost:3030'

window.addEventListener('load', () => {
   
       fetch(`${baseUrl}/jsonstore/cookbook/recipes`)
       .then(res => res.json())
        .then( recipes => {
            renderRecipes(Object.values(recipes))
        });

    });

    function renderRecipes(recipes) {
        const mainElement = document.querySelector('main');

        mainElement.innerHTML = '';

        recipes.forEach(x => {
            mainElement.appendChild(createRecipe(x))
        });

    }
    function createRecipe(recipe){
        let recipeElement = document.createElement('article');
        recipeElement.classList.add('preview');

        recipeElement.addEventListener('click', () => {
            fetch(`${baseUrl}/jsonstore/cookbook/details/${recipe._id}`)
            .then (res => res.json())
            .then(details => {
                const mainElement = document.querySelector('main');
                mainElement.innerHTML = '';

                mainElement.appendChild(renderDeatiledRecipe(details)) 

            })

        });

        //WARNING XSS!
        recipeElement.innerHTML = `
            <div class="title">
                <h2>${recipe.name}</h2>
            </div>
            <div class="small">
                <img src="${recipe.img}">
            </div>
        `;
        return recipeElement
    }
    function renderDeatiledRecipe(details) {
        let recipeElement = document.createElement('article');

        recipeElement.innerHTML = ` 
        <article>
            <h2>${details.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${details.img}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                      ${details.ingredients.map(x => `<li>${x}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${details.steps.map(x => `<p>${x}</p>`).join('')}
            </div>
        </article>
    `;
    return recipeElement;

    }

   
    
    //     }

    //     async function getDetails(id) {
    //         const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`;
    //         const res = await fetch(url);
    //         const data = await res.json()

    //         const details = Object.entries(data);
    //         //console.log(details); //[Array(2), Array(2), Array(2), Array(2), Array(2)]

    //         // call getDetails function for each recipe
    //         details.forEach(r => {
    //             //console.log(r);
    //             for (let i = 0; i < r.length; i++) {
    //                 const key = r[0];
    //                 const value = r[1]
                   
    //             console.log(value);
    //             }
    //             //console.log(recipe);
    //         });

    //     }


    // }

    // function createElement(type, parent, attributes = {}, children = []) {
    //     const element = document.createElement(type);

    //     for (const [key, value] of Object.entries(attributes)) {
    //         if (key === 'class') {
    //             element.setAttribute('class', value);
    //         } else {
    //             element.setAttribute(key, value);
    //         }
    //     }

    //     for (const child of children) {
    //         if (typeof child === 'string') {
    //             element.appendChild(document.createTextNode(child));
    //         } else {
    //             element.appendChild(child);
    //         }
    //     }

    //     if (parent) {
    //         parent.appendChild(element);
    //     }

    //     return element;
    // }






