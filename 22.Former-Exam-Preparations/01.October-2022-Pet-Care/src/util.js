export async function getUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData')); // ako e null, JSON shte varne null, nyama kakvo da proveryavame
    return data;
}

export async function setUserData( data) {
    sessionStorage.setItem('userData', JSON.stringify(data))
}

export async function clearUserData() {
   sessionStorage.removeItem('userData')
}

