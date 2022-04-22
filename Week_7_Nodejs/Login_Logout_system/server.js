const express = require('express');
const path = require('path');
const app = express();


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');  //ejs is a dynamic engine for dynamic pages
//Home route
app.get('/', function(req, res){
    res.render('base', {title: 'Login System'});
    console.log('Listening to the server on http://localhost:3000')
})

app.listen(3000)