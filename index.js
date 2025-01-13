const express = require("express"); //require express
const app = express(); //making application 
const path = require("path")

const port = 3000;  // port listening 
app.use(express.json()); //type of data passing in backend 
app.use(express.urlencoded({extended : false})) // means hm form ka data bhi support krenge and json data bhi support krenge


app.set("view engine","ejs")  //telling express that view engine is ejs , embedded javascript templatiing 
app.set("views", path.resolve("./views")) //telling all my views are in ./views 

//statics router (frontend (server side rendering routers ))
const staticRoute = require("./routes/staticsRouter"); 
app.use('/',staticRoute); 


const urlRouter = require("./routes/url"); 
app.use('/url/', urlRouter); // Add this to handle trailing slash


const URL = require("./models/url") // fecting database to check



app.get('/url/:shortid', async (req, res) => {
    const shortid = req.params.shortid;  // Get the short URL ID from the request

    // Find the URL document by the short ID and add the current timestamp to visit history
    const entry = await URL.findOneAndUpdate(
        { shortid },  // Search for the document that matches the shortid
        { $push: { visitHistory: { timestamp: Date.now() } } },  // Add the current time to visit history
        { new: true }  // Return the updated document after the change
    );

    // If the entry is not found, return a 404 error
    if (!entry) {
        return res.status(404).json({ error: "URL not found" });
    }
    const totalClicks = entry.visitHistory.length;
    // Redirect to the long URL that was stored in the entry
    res.redirect(entry.redirectURL);  // This sends the user to the original URL
});





//connection with mongoDB
const {connectToMongoDB} = require("./connection")
connectToMongoDB("mongodb://127.0.0.1:27017/short-URL").then(()=>console.log("mongodb connected")).catch((err)=>console.log("error",err))


app.listen(3000, () => {
    console.log(`Server is listening at port ${port}`);
  });