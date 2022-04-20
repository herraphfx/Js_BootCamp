const http = require('http');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('ContentType', 'application/json');
        let json_msg = JSON.stringify(user);
        res.end(json_msg);
    }
    else{

        console.log('Request receiver');
        res.setHeader('Content-Type', 'text/html'); //Send back resposnse
        res.writeHead(200); //send response that it is okay
        res.end('<h1> This is a response</h1>');
        }
   
});

server.listen(8080);