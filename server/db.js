const mongoose= require("mongoose")

const connectdb = () =>{
    mongoose.connect(process.env.DB,(error)=>{
        if(error) console.log('error in connecting db',error);
        else console.log("DB connected")
    })
}
module.exports = connectdb;

