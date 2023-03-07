async function getInfo() {

    //read input data
    //request to server
    //parse data
    //display data
    //check error


    //read input data
    //request to server
    const timeTableElement = document.getElementById('buses')
    const stopNameElement = document.getElementById('stopName')

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    try {
        stopNameElement.textContent = 'Loading...'
        timeTableElement.replaceChildren()
        const res = await fetch(url);


        if (res.status !== 200) {
            throw new Error('Error')
        }

        const data = await res.json()           //parse data

        stopNameElement.textContent = data.name //display data

        const busAndArrival = Object.entries(data.buses)

        busAndArrival.forEach(busId => {
            const liElement = document.createElement('li')
            liElement.textContent = `Bus ${busId[0]} arrives in ${busId[1]} minutes`
            timeTableElement.appendChild(liElement)
        })

    } catch (error) {
        stopNameElement.textContent = 'Error'
    }













}