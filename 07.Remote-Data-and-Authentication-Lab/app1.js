function postData() {
    const url = `http://localhost:3030/jsonstore/collections/books`;
    const data = {
        author: 'Daryl',
        title: 'Animals'
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    return fetch(url, options )
}