import { sum, product, secondArr, data, getData } from './util.js';

// or import everything
import * as util from './util.js';
// then infront of all functions add util.
// console.log(util.sum(4, 5));
//console.log(util.product(4, 5));

import { Person } from './Person.js'

const content = document.querySelector('#content')
console.log(content.textContent);
console.log(sum(4, 5));
console.log(product(4, 5));

data.push(99);
console.log(data);