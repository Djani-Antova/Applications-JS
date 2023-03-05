let alwaysResolvingPromise = Promise.resolve('YES')
let alwaysRejectingPromise = Promise.reject('NO')

alwaysResolvingPromise
    .then(result => console.log(result))
    .catch((err) => console.log('NEVER USED'))
    .finally(() => {
        console.log('Finally');
    })

alwaysRejectingPromise
.catch((reason) => console.log(reason))

let multiplePromises = Promise.all([
    alwaysResolvingPromise,
    Promise.resolve('YES2')
])

multiplePromises.then(res => console.log(res))