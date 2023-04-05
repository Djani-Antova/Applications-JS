export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function removeUserData() {
    sessionStorage.removeItem('userData');
}

export function alertMessageFn(message) {
    return alert(message);
}

// Submit handler with validation for empty string
// Trim every input
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form));

        if (Object.values(data).some((input) => input === '')) {
            return alertMessageFn('All fields are required!');
        }

        for (const input in data) {
            data[input] = data[input].trim();
        }

        callback(data, form);
    };
}