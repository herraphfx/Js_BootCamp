const http = require('http'); //Get HTTP module

let students = {
    student1: 'Henry',
    student2: 'Oliver',
    student3: 'Dheeksha',
    student4: 'Wayne'
}

const menu =
{
    "menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                { "value": "New", "onclick": "CreateNewDoc()" },
                { "value": "Open", "onclick": "OpenDoc()" },
                { "value": "Close", "onclick": "CloseDoc()" }
            ]
        }
    }
}

const server = http.createServer((req, res) =>{ //Create server
if(req.url == '/studentlist'){
    console.log('Welcome page requested');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    let json_msg = JSON.stringify(students);
    res.end(json_msg)

  
    
}
// else if(req.url == '/welcome'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         res.end('Hello Students');
// }

else if(req.url == '/menu'){
    console.log('Menu page requested');
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    let jsonmenu = JSON.stringify(menu);
    res.end(jsonmenu)
}

else{

console.log('Request receiver');
res.setHeader('Content-Type', 'text/html'); //Send back resposnse
res.writeHead(200); //send response that it is okay
res.end('<h1> This is a response</h1>');
}

});

server.listen(3000);