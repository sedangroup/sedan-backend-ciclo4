const express = require('express');
const router = express.Router();

router.get('/ventas',(req,res)=>{
    res.send('lista de ventas')
});



module.exports = router;