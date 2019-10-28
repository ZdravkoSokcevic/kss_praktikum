
const fs= require('fs');
let userJson={
    userlist:(req,res)=> {
        console.log("List of users");
        let file= fs.readFileSync('data.json');
        res.render('user_list',{data:JSON.parse(file)});
    },
    adduser:(req,res)=> {
        console.log(JSON.stringify(req.body));
        console.log("Add user");
        res.render('add_user');
    },
    deleteuser:(req,res)=> {
        console.log("delete user");
        res.end("Delete user route");
    }
}

module.exports=userJson;