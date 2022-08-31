const express=require('express');
require("dotenv").config();//imp to import the env file
const cors = require("cors");
const connection = require("./db");
const userRoute=require("./routes/users");
const authRoute = require("./routes/auth");
const app=express();


//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

//routes
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);


app.get('/',(req,res)=>res.send('Hello Welcome to Port 8080'));

app.listen(8080,async()=>{
    try{
        await connection();
        console.log("Connected to MongoDB");
    }
    catch(e){
        console.log("error",e);
    }
  console.log('server started port 8080');
});

