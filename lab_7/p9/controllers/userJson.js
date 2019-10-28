
let userJson= {
    userlist:(req,res)=> {
        console.log("List of users");
        res.end("List of users");
    },
    adduser:(req,res)=> {
        console.log("Add user");
        res.end("Add user");
    },
    deleteuser:(req,res)=> {
        console.log("delete user");
        res.end("Delete user route");
    }
}

module.exports=userJson;