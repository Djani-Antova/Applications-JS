
document.getElementById('register-form').addEventListener('submit', onRegister);
document.getElementById('login-form').addEventListener('submit', onLogin);
document.getElementById('load-data').addEventListener('click', loadData);

async function onRegister(event) {
    event.preventDefault()

    const formData = new FormData(event.target);

    const { email, password, repass } = Object.fromEntries(formData.entries());

    if (email == '' || password == '') {
        return alert('All fields are required')
    }
    if (password != repass) {
        return alert('Passwords must match!')
    }
    const url = `http://localhost:3030/users/register`;
    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json();
        console.log(userData.accessToken);

        localStorage.setItem('email', userData.email);
        localStorage.setItem('accessToken', userData.accessToken);

        location = '/';

    } catch (err) {
        alert(err.message)
    }
}

async function onLogin(event) {
    event.preventDefault()

    const formData = new FormData(event.target)

    const {email, password} = Object.fromEntries(formData.entries());

    const url = `http://localhost:3030/users/login`;

    const options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    };

    try {
        const response = await fetch(url, options);

        if(response.ok == false) {
            const error = await response.json()
            throw error
        }  
        
        const userData = await response.json();

        localStorage.setItem('email', userData.email);
        localStorage.setItem('accessToken', userData.accessToken);

        location = '/';

    } catch (err) {
        return alert(err.message)
    }

}

async function loadData() {
    const token = localStorage.getItem('accessToken')
    if (token == null) {
        return alert('You are not logged in!')
    }

    const url = `http://localhost:3030/data/recipes`

    const options = {
        method: 'get',
        headers: {
            'X-Authorization': token
        }
    };

    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        console.log(data);
    } catch (err) {
        alert(err.message);
    }

}

