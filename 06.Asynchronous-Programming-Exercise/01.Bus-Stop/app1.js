//read input value
//request to server
//parse data
//render data
//error

async function getInfo() {
    const stopName = document.getElementById('stopName')
    const buses = document.getElementById('buses')
    const stopId = document.getElementById('stopId').value
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`


    try {

        buses.replaceChildren();

        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        const currentBusStop = Object.entries(data);
        const bus = currentBusStop[0][1];
        stopName.textContent = currentBusStop[1][1];

        Object.entries(bus).forEach(b => {
            const liElement = document.createElement('li');
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            buses.appendChild(liElement)
        })

    } catch (error) {
        stopName.textContent = 'Error';
    }
}