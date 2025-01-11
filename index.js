const express = require("express"); //require express
const app = express(); //making application 


app.use(express.json());
const port = 3000; 


const urlRouter = require("./routes/url")

app.use('/url/', urlRouter); // Add this to handle trailing slash


const URL = require("./models/url") // fecting database to check

app.get('/:shortid',async (req, res)=>{
    const shortid = req.params.shortid;
   const entry =  await URL.findOneAndUpdate({
        shortid
    },{$push:{
        visitHistory:{timestamps:Date.now()},
    }})
    res.redirect(entry.redirectURL)
})


const {connectToMongoDB} = require("./connection")
connectToMongoDB("mongodb://127.0.0.1:27017/short-URL").then(()=>console.log("mongodb connected")).catch((err)=>console.log("error",err))


app.listen(3000, () => {
    console.log(`Server is listening at port ${port}`);
  });