const express = require('express');
const app = express();


app.get(`/:id`, function(req,res){
    res.json(req.params);
});

app.listen(3000)