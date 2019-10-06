const url= require('url');
const request= require('request');

//      1
var options= {
    // protocol:'https://',
    host: 'https://twitter.com/',
    // pathname: '1.1',
    // query: {q:'posts'}
}

//      2
// var options= {
//     url:'https://reddit.com/r/funny.json',
//     method: 'GET',
//     headers: {'Accept':'application/json','Accept-Charset':'utf-8'}
// }

let tURL= url.format(options);
console.log(tURL);
//      1
request(tURL,(err,res,body)=> {
    console.log(`SERVER: ${JSON.stringify(res.headers.SERVER.Max-Age)} `);
    // console.log(`Last modified ${res.headers['last-modified']}`);
});

//      2
// request(options,(err,res,body)=> {
//     let json=JSON.parse(body);
//     console.log(body);
// });