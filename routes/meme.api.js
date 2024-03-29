const express = require("express");
const router = express.Router();
const memeController = require("../controllers/meme.controller");

/**
* @route GET api/memes
* @description Get all memes
* @access Public
*/
router.get("/", memeController.getMemes);
router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Get all memes ok" });
});


const upload = require("../helpers/upload.helper").upload;
const photoHelper = require("../helpers/photo.helper");
//...
/**
* @route POST api/memes
* @description Create a new meme
* @access Public
*/
router.post("/", upload.single("image"),photoHelper.resize,memeController.createMeme, (req, res, next) => {
  console.log(req.file);
  res.send({ status: "ok" });
});

/**
 * @route GET api/memes/images
 * @description Get list of original images
 * @access Public
 */
router.get("/images", memeController.getOriginalImages);

/**
 * @route PUT api/memes/:id
 * @description Update text on the meme
 * @access Public
 */
router.put('/:id', memeController.updateMeme)

module.exports = router;