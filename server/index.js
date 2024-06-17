const express=require('express');
const app=express();
const Connection=require('./database/db.js');
const dotenv=require('dotenv');
const PORT=8000;
const router=require('./routes/route.js')

dotenv.config();
app.use('/',router);

app.listen(PORT,()=>{
    console.log(`backend is running on the port ${PORT}`);
})

const MONGOURI=process.env.MONGO_URI;
Connection(MONGOURI);
