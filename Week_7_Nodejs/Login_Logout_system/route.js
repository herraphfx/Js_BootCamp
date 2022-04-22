const express = require('express');
const router = express.Router();

const credential = {
    email: 'admin@admin.com',
    password: 'root@admin'
}

router.post('/admin/login', (req, res) =>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.end("Login Successful...!");
        // res.redirect('/admin/dashboard')
    }else{
        res.write('Invalid System');
    }
});

module.exports = router;