const express = require('express');
const app = express();


app.get('/', function(req,res) {
    res.write('<h1>This is an HTML tag</h1>');
});

app.listen(3000);