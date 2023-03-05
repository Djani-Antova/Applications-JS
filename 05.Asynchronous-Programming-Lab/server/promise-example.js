
let promise = new Promise(function (resolve, reject) {


    setTimeout(() => {
        if (Math.random > 0.5) {
            resolve('Just Married')
        } else {
            reject('Sorry, it didn\'t work')
        }
    }, 1000)

})

console.log(typeof promise);
//First option syntax
promise.then((result) => {
    console.log(result);
})

promise.catch((reason) => {
    console.log(reason);
})
//Second option syntax - more often
promise.
    then((result) => {
        console.log(result);
    })
    .catch((reason) => {
        console.log(reason);
    })