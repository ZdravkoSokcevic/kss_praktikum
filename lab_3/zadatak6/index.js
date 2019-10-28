var fs= require('fs');
let file= fs.createReadStream('index.html');

file.on('readable', ()=> {
	let chunk;
	while(null!== (chunk=file.read())) {
		console.log( chunk.toString() );
	}
});
