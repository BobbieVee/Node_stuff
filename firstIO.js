var addr = '';
var fs = require('fs');
addr = process.argv[2];
// console.log(addr);

var buf=fs.readFileSync(addr);
str = buf.toString();
// console.log(str);
var lineArr = str.split('\n');
console.log(lineArr.length-1);
