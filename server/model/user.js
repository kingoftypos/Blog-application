const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
       
    },
})
const user=mongoose.model('user',userSchema);
module.exports=user;