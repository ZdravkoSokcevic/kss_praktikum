const mongoDb= require('mongo');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/student_mongo');

const User= mongoose.model('User',{
    first_name:String,
    last_name:String,
    firstYear_avg:Number,
    secondYear_avg:Number,
    thirdYear_avg:Number
});
module.exports= User;