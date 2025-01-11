const mongoose = require("mongoose")

async function connectToMongoDB(url){
       return (mongoose.connect(url))
}
module.exports = {
    connectToMongoDB
}



//how to connect mongodb so first use mongoose.connect("").then(()=>{console.log("mongodb successed")})
// mongoose.connect("") //