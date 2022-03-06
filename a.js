let mod = require('./b.js');
console.log('a.js-1', mod.num);
mod.plus();
console.log('a.js-2', mod.num);
setTimeout(() => {
  console.log('a.js-3', mod.num);
  mod.num = 3;
  console.log('a.js-4', mod.num);
}, 2000);
