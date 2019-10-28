const express= require('express');
const router= express.Router();

router.use((req,res,next)=> {
    console.log("Time",Date.now());
    next();
});
router.get('/',(req,res,next)=> {
    res.send('Birds home page');
});
router.get('/about',(req,res)=> {
    console.log("Stigao u about");
    res.end('About birds');
});

module.exports=router;
