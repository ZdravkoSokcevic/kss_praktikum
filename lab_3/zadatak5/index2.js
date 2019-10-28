var fs= require('fs');

fs.readFile('index.html',(err,buffer)=> {
	console.log(buffer.toString());
});
console.log('KRAJ');
