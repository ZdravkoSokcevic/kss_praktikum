const express= require('express');
const router = express.Router();
const path= require('path');



// router.get('/',(req,res,next)=> {
//     res.send('Choose the zad number! ');
//     // res.render('./zad1');
//     next();
// });

router.get('/zad',(req,res)=> {
    console.log("Tu je");
    let s= req.query.s;
    if(s==undefined) {
        res.render('zad1',{title:"Zadatak1"});
    }
    else if(s=='slika1') {
        res.send('slika1');
    }
    else if(s=='slika2') {
        let p=path.join(__dirname+'../public/images/','slika2.jpeg');
        res.sendFile(p);
    }
    else if(s=='slika3') {
        res.send({msg:'slika3.jpeg'});
    }
});

module.exports=router;
