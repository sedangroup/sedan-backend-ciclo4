const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
/*
router.post('/login',(req,res)=>{
    const email = req.body.email;
    const pass = req.body.password;

    userModel.find({ email:email,password:pass},(err,result)=>{
        if(err){
            console.log(err);
            res.json(err);
        }else{
           if(result.length>0){
                let data = JSON.stringify(result);
                const token = jwt.sign(data,'sedan');
                res.json({token});
           }else{
                res.status(401).send("usuario no valido o no coincid")
           }
        }
    });
});

router.post('/test',verifyToken,(req,res)=>{
    console.log(req.data[0].email)
    res.send('info secreta')
})

function verifyToken(req,res,next){
    if(!req.headers.authorization) return res.status(401).json('no autorizado');

    const token = req.headers.authorization.substr(7);
    if(token!==''){
        const content = jwt.verify(token,'sedan');
        req.data = content;
        next();
    }else{
        res.status(401).json('token vacio o no valido')
    }
}
*/

module.exports = router;