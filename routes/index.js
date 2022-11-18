const express = require("express");
const router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({status:'ok', data:"Hello World Lam!"});

// });


// All route of Meme
const memeAPI = require("./meme.api");
router.use("/memes", memeAPI);


module.exports = router;

