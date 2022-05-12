const express = require('express');
const router = express.Router();

const credential = {
    email: 'admin@admin.com',
    password: 'root@admin'
}

router.post('/admin/login', (req, res) =>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        // res.end("Login Successful...!");
        res.redirect('/route/dashboard')
    }else{
        res.end('Invalid Credentials');
    } 
});

//route to dashboard
router.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user}) 
    }
    else{
        res.send("Unauthorize User")
    }
})

//route to logout
router.get('/logout', (req, res)=>{
    req.session.destroy(function(err){
        if(err){
            res.send("Error")
        }
        else{
            res.render('base',{title: "Logout",logout: "logout successfully"})
        }
    })
})

module.exports = router;