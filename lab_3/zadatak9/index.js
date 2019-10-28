const fs= require('fs');
const path='./index.html';

const type=fs.lstatSync(path);
if(!type.isDirectory() && !type.isSocket() && type.isFile()) {
	let html1=fs.createReadStream(path);
	let html2=fs.createWriteStream('index2.html');
	html1.pipe(html2);
	console.log("success");
}else {
	console.log("unsupported path");	
}
