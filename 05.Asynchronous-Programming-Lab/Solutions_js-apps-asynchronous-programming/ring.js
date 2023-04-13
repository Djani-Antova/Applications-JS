let ring = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (Math.random > 3.5) {
            resolve('Just Married...')
        } else {
            reject('Sorry it\'s me')
        }
    }, 3000)
})

console.log(ring);
console.log(typeof ring);

ring.then((result) => {
    console.log(result);
});

ring.catch((reason) => {
    console.log(reason);
})