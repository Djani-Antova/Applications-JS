const baseUrl = 'https://swapi.dev/api';

async function getStarwarsCharacter(id) {
        let response = await fetch(`${baseUrl}/people/${id}`);
        let character = await response.json();
        return character
}
getStarwarsCharacter(4)
.then(name => console.log(name))
.catch(err => console.log(err))


// const getStarwarsCharacter = async function() {
// }

// const getStarwarsCharacter = async () => {
// }