const http = require('http');

const server = http.createServer((req, res) => {
res.setHeader('Content-Type', 'text/html'); //Send back resposnse
res.writeHead(200); //send response that it is okay
res.write('<h1> This is my first response</h1>');
res.write('<h1> This is my second response  </h1>');
res.write('<p>This is my third</p>');
res.end();

});

server.listen(3000);