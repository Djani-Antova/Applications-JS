function sum(a, b) {
    return a + b
}

function product (a,b) {
    return a * b
}

const myArr = [10, 20 , 30];

const secondArr = [1, 2, 3];

export async function getData() {
    //make some kind of HTTP request
    return Promise.resolve('Hello')
}

export {
    sum,
    product,
    secondArr,
    myArr as data,
    //getData or as above
}