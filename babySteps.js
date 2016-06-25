var arr = [];
var sum = 0;
arr = process.argv;

for (var i=2; i<arr.length;i++){
	sum += Number(arr[i]);
}
console.log(sum);
// console.log(arr.slice(2,arr.length) );