function solve() {

    const label = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    }

    departBtn.addEventListener('click', depart)
    arriveBtn.addEventListener('click', arrive)

    async function depart() {
        //get info for next stop
        //display next stop

        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
            const res = await fetch(url)
            const data = await res.json()                  

            label.textContent = `Next stop ${data.name}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            console.log('Error');
        }
    }


    async function arrive() {

        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
            const res = await fetch(url)
            const data = await res.json()
            stop.next = data.next;
            label.textContent = `Arriving at ${data.name}`
            departBtn.disabled = false;
            arriveBtn.disabled = true;
        } catch (error) {
            console.log('Error');
        }

    }

    return {
        depart,
        arrive
    };


}


let result = solve();