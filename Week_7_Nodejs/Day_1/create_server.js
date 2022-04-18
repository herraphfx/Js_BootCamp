let http = require('http');

// const server = http.createServer(options, function(req, res){
//     console.log('I am listening')
// });

// server.listen(3000);

const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello world\n I created my first server.\n new files updated");
    console.log('Request Received')
  }).listen(3000);