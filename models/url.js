//require
const mongoose = require("mongoose")



//schema-- it is the map or representation of data in the dataBase 
const urlSchema = mongoose.Schema({
    shortid:{type:String, required:true, unique:true}, 
    redirectURL:{type:String, required:true,}, 
    visitHistory:[{
        timestamp: { type: Date, default: Date.now }, // Using Date type for timestamp
        ipAddress: { type: String }, // Optional: track visitor's IP address
        userAgent: { type: String }, // Optional: track visitor's user-agent
      },]
},  {timestamps:true}); 




// models 
const URL = mongoose.model("url", urlSchema)//it is something like mapping function which means you just mapping into
//Urlschema thats name is url, something like you are making connection in database


module.exports =  URL; 






//models ko bahar export kr denge by putting a variable 