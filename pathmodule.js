const path=require('path');
console.log(path.basename('C;\\temp\\myfile.html')) // myfile.html
// myfile.html is the base name of this module
console.log(path.dirname('C;\\temp\\myfile.html')) // C;\temp
console.log(path.extname('index.js')); // .js
console.log(path.extname(__filename)); // .js
