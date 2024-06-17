const express=require('express');
const app=express();
const Connection=require('./database/db.js');
const dotenv=require('dotenv');
const cors=require('cors');
const bodyParser=require('body-parser');
const PORT=8000;
const router=require('./routes/route.js')

dotenv.config();
app.use('/',router);
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT,()=>{
    console.log(`backend is running on the port ${PORT}`);
})

const MONGOURI=process.env.MONGO_URI;
Connection(MONGOURI);
