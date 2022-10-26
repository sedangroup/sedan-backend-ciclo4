const express = require('express');
const router = express.Router();
const wsp = require('wbm');



module.exports = wsp;

router.post('/whatsapp',(req,res)=>{

    wsp.start().then(async () => {
        const  phones = req.body.phone;
        const message = req.body.msg;
        await wsp.send(phones, message);
        await wsp.end();
        res.send('mensage enviado');
    }).catch(err => console.log(err));
    
});



module.exports = router;