//Part 1
// let maindoc = require('./main.js');

// let b = 5

// console.log(maindoc.number + b);

//Part 3

let http = require('http');
let currentDate = require('./main.js');

let datetime_1 = currentDate.datetime();

console.log(datetime_1);

const server = http.createServer(function (req, res) {
   
    res.writeHead(200);
    res.end(`The date and time are currently ${datetime_1}`);
    
  }).listen(3000);