

var fs = require('fs');





var callback = function(err, list){
	// console.log(list);
	for(var i = 0; i < list.length; i++){
		// console.log(list[i].indexOf('.' + arg2));
		if (list[i].indexOf('.' + arg2) > 1) {
			console.log(list[i]);
		}
	}
}

var filtered = fs.readdir(arg1,callback);

module.exports = filtered(arg1,arg2);