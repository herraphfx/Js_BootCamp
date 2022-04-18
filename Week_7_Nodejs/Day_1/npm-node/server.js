let http = require('http');


const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("Hi there at the frontend");
    console.log('I am Listening')
  }).listen(3000);