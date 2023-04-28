export  function getUserData() {
    return JSON.parse(localStorage.getItem('user')); // ako e null, JSON shte varne null, nyama kakvo da proveryavame
}

export function getAccessToken() {
    const user = getUserData();
    if(user) {
        return user.accessToken;
    } else {
        return null;
    }
}

export function clearUserData() {
    localStorage.removeItem('user')
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data))
}

export function createSubmitHandler(ctx, handler) {
    return function(event) {
        event.preventDefault();
            // in details:
        // const form = event.currentTarget;
        // const formData = new FormData(form);
        // const data = Object.fromEntries(formData.entries());

        const formData = Object.fromEntries(new FormData(event.target))

        handler(ctx, formData, event);
    };
}

export function parseQuerystring(query = '') { //Check if this is empty string or empty space
    return Object.fromEntries(query
        .split('&')
        .map(kvp => kvp.split('=')))
}
