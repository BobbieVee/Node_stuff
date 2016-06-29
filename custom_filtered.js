
var fs = require('fs');
var filtered = function filtered(list,ext, callback){
	// console.log('from custom_filtered filted: ', list, ext)
	fs.readdir(list, function(err, list) {
		if(err) return callback(err);
		else {
			var filteredList = [];
			for(var i = 0; i < list.length; i++){
				// console.log(list[i].indexOf('.' + ext));
				if (list[i].indexOf('.' + ext) > 0) {
					// console.log('Keep this ->', list[i]);
					filteredList.push(list[i]);
					// console.log('new list =', filteredList);
				}
			}
			return callback(null, filteredList);
		}
	});
};
module.exports = filtered;