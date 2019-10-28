///////////////////////////////////////////////////////////////////////////////////
//      ● Napraviti html formu za unos srednjih ocjena jednog sutdenta po godini studija       //
//      ● (jedno polje za godinu/broj) i node aplikaciju koja racuna ukupnu srednju ocjenu  //
//      ● i vraca je klijentu u obliku html stranice. Koristiti HTTP POST metodu za                   //
//      ●  prosljedjivanje parametara

const express= require('express');
const app= express();
const bodyParser= require('body-parser');
const User= require('./model/user');
const UserController= require('./controller/user');
app.use(bodyParser());
app.set('/views',__dirname+'/views');
app.set('view engine','ejs');
app.post('/user/add',(req,res)=> {
    const body=req.body;
    // console.log(body);
    const user={
        name: body.first_name,
        last_name: body.last_name,
        email:body.email,
        firstYear_avg: body.firstYear_avg,
        secondYear_avg:body.secondYear_avg,
        thirdYear_avg:body.thirdYear_avg,
        age: body.age
    }
    UserController.validate(user).then(succes=> {
        if(!succes) {
            res.render('error',{message:'Validation failed'});
        } else {
            User.collection.insert(user).then(promise=> {
                if(!promise)
                    res.render('error',{message:'Not success'});
                UserController.all().then(users=> {
                    // ToDo napraviti da se racuna prosjecna ocjena tokom sve 3 godine
                    console.log(users);
                    if(users)
                        res.render('user_list',{users:users});
                    else res.render('user_list',{user:'empty'});
                });
            });
        }
            
    });
    
});
app.listen(3000);