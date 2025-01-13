// const URL =("../models/url")
// const {nanoid}=require("nanoid")

// async function handleGenerateNewShortUrl(req, res ){
//     const  body = req.body;
//     if(!body.url)return res.status(400).json({error:"url is required"})
//     const shortID = nanoid(8);
//     await URL.create(
//         {shortid :shortID,
//         redirectURL:body.url,
//         visitHistory:[],});
//         return res.json({id:shortID})
// }
// module.exports={
//     handleGenerateNewShortUrl,

// }
// using validator 
const URL = require("../models/url");
const { nanoid } = require("nanoid");
const validator = require("validator");  // Import the validator package

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;

    // Check if the URL is provided
    if (!body.url) return res.status(400).json({ error: "URL is required" });

    // Validate the URL
    if (!validator.isURL(body.url)) {
        return res.status(400).json({ error: "Invalid URL" });
    }

    // Generate a short ID
    const shortID = nanoid(8);

    // Create the new short URL entry
    await URL.create({
        shortid: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    // Return the short URL ID
    // return res.json({ id: shortID }); at the time of backend i am sending json data 
    return res.render("home",{ id: shortID } )// now at the time of frontend i am rendering home with my id
}


// //my route of analytics 
// async function handleGetAnalytics(req, res){
//     const shortid =req.params.shortId;
//     const result= await URL.findOne({shortid});
//     return res.json({
//         totalclicks :result.visitHistory.length,
//         Analytics:result.visitHistory})
// }

async function handleGetAnalytics(req, res) {
    const shortid = req.params.shortId;
    const result = await URL.findOne({ shortid });

    if (!result) {
        return res.status(404).json({ error: "URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        Analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics
};
