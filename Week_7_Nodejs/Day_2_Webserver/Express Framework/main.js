// console.log('Express Framework')

const express = require('express');
const app = express();


const students = {
    student1: 'Henry',
    student2: 'Oliver',
    student3: 'Dheeksha',
    student4: 'Wayne'
}


//Import body parser to collect form data
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', (req,res)=>{
    console.log(req.body);
    console.log('Welcome ', req.body.fullname)
})

//Looking for public folder
app.use(express.static('public'));

//If path not specifies , applies for request
app.use((req, res, next) => {       //add requests
    console.log("Hello Middleware");
    next();     //Goes to the next middleware
});

app.use((req, res, next) => {
    console.log("Hello Middleware 2");
    next();     //Goes to the next middleware, if not present, the next cycle stops
});

app.use('/about',(req, res, next) => {
    console.log("Hello Middleware 2");
    next();     //Goes to the next middleware, if not present, the next cycle stops
});

app.get('/', function(req,res) {
    console.log('Hi')
    res.send('Hello World');
})


app.get('/about', (req,res)=>{
    res.send('This is a message');
})
//Parameters

app.get('/tutorial/:notion', (req, res) => {
    console.log("req.params: ", req.params)
    res.send(`Tutorial about ${req.params.notion}!`)
});

//Products
// app.get('/products/:product', (req, res) => {
//     console.log("Product requested:", req.params.product)

//     res.send(`Product Queried ${req.params.product}`)
// })

app.get('/products/:product', (req, res) => {
    //check if the parameter retrieved is a number
    if (isNaN(req.params.product)) {
        res.status(400).send('Bad request! Product ID contains numbers only') //error handler
    } else {
        res.send(`Product requested ${req.params.product}`)
    }
})

app.get('/students', (req, res)=>{
    res.json(students);
})



app.listen('5000');

