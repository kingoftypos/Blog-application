const User=require('../model/user.js');
const signupUser=async (req,res)=>{
    try{
        const user=req.body;
        const newUser=new User(user); 
        await newUser.save();
        return res.status(200).json({msg:"signup successful"});
    }
    catch(err)
    {
        return res.status(500).json({msg:"error while signup the user"});
    }

}

module.exports=signupUser;