const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const {v4: uuidv4 } = require('uuid');
const router = require('./route');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//load css and assets folder
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//for password
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized:true
}));

//Calling EJS to view dynamic pages
app.set('view engine', 'ejs');  //ejs is a dynamic engine for dynamic pages


//Route Credential page
app.use('/route', router);

//Admin route
app.get('/admin', function(req, res){
    res.render('base', {title: 'Login System'});
    console.log('Listening to the server on http://localhost:5000/admin')
})

app.listen(5000)