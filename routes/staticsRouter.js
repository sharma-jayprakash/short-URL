const express = require("express"); 
const  router = express.Router(); 
const URL = require("../models/url");

router.get('/', async (req, res) => {
    try {
        const allurls = await URL.find({});
        res.render("home", {
            urls: allurls,  // Passing all URLs as 'urls'
        });
    } catch (err) {
        console.log("Error fetching URLs:", err);
        res.status(500).send("Server error");
    }
});

module.exports=router; 