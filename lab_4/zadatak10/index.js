const http= require('http');

const server=http.createServer();

server.on('connection',conn=> {
    conn.write('Konekcija uspostavljena! ');
    conn.end();
});

server.listen(3490);
