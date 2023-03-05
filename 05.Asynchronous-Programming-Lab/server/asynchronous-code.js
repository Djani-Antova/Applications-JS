
console.log('Start');

setTimeout(() => {
console.log('Done');
}, 3000)

console.log('End');

element.addEventListener('click', (e) => {
e.preventDefault();
})