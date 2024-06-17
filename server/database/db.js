const mongoose=require('mongoose');
 const Connection=async (MONGOURI)=>{


    try{
    await mongoose.connect(`${MONGOURI}`);
    console.log("database connected successfully");
    }
    catch(error){
        console.log("error while connecting the database",error);

    }
}
module.exports=Connection;