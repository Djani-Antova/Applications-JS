import { html, render } from "../node_modules/lit-html/lit-html.js";
import {cats} from './catSeeder.js'


const catTemplate = (data) => html `
<ul>
     ${data.map(cat => html `<li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn">Show status code</button>
                    <div class="status" style="display: none" id="${cat.id}">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>`)}   
</ul>
`

const allCats = document.getElementById('allCats')

allCats.addEventListener('click', toggle)

function update (){
    const result = catTemplate(cats);
    render(result, allCats);
}

update()

function toggle (e){
    if(e.target.tagName == 'BUTTON'){
        const button  = e.target
      
        if(button.textContent == 'Show status code'){
            button.textContent = 'Hide status code';
            button.parentNode.querySelector('.status').style.display = 'block'
            
        } else if (button.textContent == 'Hide status code'){
            button.textContent = 'Show status code'
            button.parentNode.querySelector('.status').style.display = 'none'          
        }
    }
}
