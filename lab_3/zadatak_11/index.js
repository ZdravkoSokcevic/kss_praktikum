let fs= require('fs');
console.log('Going to get file info! ');
fs.stat('input.txt',(err,stats)=> {
    if(err) return console.error(err);
    if(stats.isDirectory())
        console.log('Direktorijum je');
    else if(stats.isFile())
        console.log('Fajl je');
    else if(stats.isSocket())
        console.log('Soket je');
    else console.log('Fajl ne postoji');
});