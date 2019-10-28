const User= require('../model/user');

const userController= {
    all:(req,res)=> {
        return new Promise((res,rej)=> {
            User.find({},(err,data)=> {
                let overall_sum=0;
                data.forEach(elem=> {
                    let avg_grade= (elem.firstYear_avg+elem.secondYear_avg+elem.thirdYear_avg)/3;
                    overall_sum+=avg_grade;
                    elem[avg_grade]= avg_grade;
                });
                data['overall_avg']=overall_sum/data.length;
                res(data);  
            });
        });
    },
    validate:user=> {
        console.log(user);
        return new Promise((res,rej)=> {
            if (!user) rej('Error');
                for(let x in user)  {
                    console.log(`Property: ${x} : value: ${user[x]}`);
                    if(user[x]==null || user[x]==undefined)
                        res(false);
                }
                    
                res(true);
        })
        
    }
}

module.exports= userController;