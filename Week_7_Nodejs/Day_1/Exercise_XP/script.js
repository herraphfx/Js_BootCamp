let http = require('http');
let largeNumber = require('./main.js');

let b =5;
console.log(largeNumber.number + b);

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end("My module is:\n " + (largeNumber.number +b) + "<h1>Hi there at the frontend</h1>");
    console.log('I am Listening')
  }).listen(3000);