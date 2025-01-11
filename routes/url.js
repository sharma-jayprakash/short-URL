const express = require("express");
const router = express.Router();
const app = express(); 

const {handleGenerateNewShortUrl,handleGetAnalytics}=require("../controllers/url")


router.post("/",handleGenerateNewShortUrl );
router.get('/Analytics/:shortId', handleGetAnalytics); 





module.exports=router;