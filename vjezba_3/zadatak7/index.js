const fs= require('fs');

let file= fs.createReadStream('index.html');
file.pipe(process.stdout);
