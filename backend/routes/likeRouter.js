const express = require("express");
const authentication = require("../middleware/authentication");
//create LikesContoller router

const LikedRouter = express.Router();

// import LikedController controllers from "LikesContoller"

const {
    deleteLikedVideos,
    addToLikedVideos,
    getLikedVideosByUserId
} = require("../controllers/LikesController");

//cerate end point to get LikesContoller

LikedRouter.get("/", authentication, getLikedVideosByUserId);

//create end point to add Video to LikesContoller

LikedRouter.post("/add/:id", authentication, addToLikedVideos);

//create end point to delete Video from LikesContoller

LikedRouter.delete("/delete/:id", authentication, deleteLikedVideos);
module.exports = { LikedRouter };