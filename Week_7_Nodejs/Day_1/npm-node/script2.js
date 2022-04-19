//Part 1
// let maindoc = require('./main.js');

// let b = 5

// console.log(maindoc.number + b);

//Part 2

// let http = require('http');
// let largeNumber = require('./main.js');

// let b =5;
// console.log(largeNumber.number + b);

// const server = http.createServer(function (req, res) {
//     res.setHeader('Content-Type', 'text/html');
//     res.writeHead(200);
//     res.end("My module is:\n " + (largeNumber.number +b) + "<h1>Hi there at the frontend</h1>");
//     console.log('I am Listening')
//   }).listen(3000);

//Part 3

let http = require('http');
let currentDate = require('./main.js');

let datetime_1 = currentDate.datetime();

console.log(datetime_1);

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`The date and time are currently ${datetime_1}`);
    
  }).listen(3000);