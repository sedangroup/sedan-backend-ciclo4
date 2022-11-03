const express = require('express');
const router = express.Router();
const colaboradorModel = require('../models/colaborador');

router.get('/getColaborador',(req,res)=>{
    colaboradorModel.find({},(err,result)=>{
        if(err){
            console.log(err);
            res.json(err);
        }else{
            res.json(result.reverse())
        }
    })
});

router.post('/newColaborador',async (req,res)=>{
    const colaborador = req.body;
    const newColaborador = new colaboradorModel(colaborador);
    await newColaborador.save();
    res.send(colaborador)
});


module.exports = router;