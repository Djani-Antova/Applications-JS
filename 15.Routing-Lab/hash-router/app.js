const homeTemplate = () => `
    <h1>Home</h1>
    <p>Laasdjh asdfadlhf lsdkfj adf</p>
`; 

const atriclesTemplate = () => `
    <h1>Articles</h1>
    <p>Laasdjh asdfadlhf lsdkfj adf dfadlhf lsdk dfadlhf lsdk</p>
`; 

const aboutTemplate = () => `
    <h1>About</h1>
    <p>Laasdjh asdfad</p>
`; 


const routes = {
    '#home': homeTemplate,
    '#articles': atriclesTemplate,
    '#about': aboutTemplate
}

const root = document.getElementById('root')

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash]
   root.innerHTML = template()
});