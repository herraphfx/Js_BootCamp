const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());


user = {
    firstname: 'John',
    lastname: 'Doe'
}

// app.use(express.static('public'));

app.get('/', function(req, res) {
    let json_user = JSON.stringify(user);
    res.send(json_user);
});

app.listen(3000);