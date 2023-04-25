export const saveUser = (user) => {

    if (user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user))

    }

};

export const deleteUser = () => {
    localStorage.removeItem('user')
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user') //because it returns it as a string;

    if (serializedUser) {
        let user = JSON.parse(serializedUser);

        return user;
    }
}

export const getToken = () => getUser()?.accessToken