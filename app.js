var arg1 = process.argv[2];
var arg2 = process.argv[3];


var filtered = require('./custom_filtered.js');

// console.log('from app.js: ', arg1, arg2)

filtered(arg1,arg2, function(err, list) {
	if(err) throw err;
	else {
		console.log(list.toString().split(',').join('\n'));
	}
});



