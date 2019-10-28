const fs= require('fs');
let listUser=(req,res)=> {
    let file=fs.readFileSync('./user.json');
    res.render('user_list',{data:JSON.parse(file)});
}


module.exports=listUser;