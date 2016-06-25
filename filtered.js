
var fs = require('fs');

var arg1 = process.argv[2];
var arg2 = process.argv[3];



var callback = function(err, list){
	// console.log(list);
	for(var i = 0; i < list.length; i++){
		// console.log(list[i].indexOf('.' + arg2));
		if (list[i].indexOf('.' + arg2) > 1) {
			console.log(list[i]);
		}
	}
}

fs.readdir(arg1,callback);
// console.log('look in ' + arg1 + ' for files with ' + arg2 + " extension.")