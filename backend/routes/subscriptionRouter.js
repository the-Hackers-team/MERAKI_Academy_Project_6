const express = require("express");
const authentication = require("../middleware/authentication");
//create LikesContoller router

const subsciptionRouter = express.Router();

// import LikedController controllers from "LikesContoller"

const {
  addToSubscription,
  removeFromMySubscription,
  getMySubscriptionChannels,
  getAllvideossubscripes,
} = require("../controllers/subscripe.js");

//cerate end point to get LikesContoller

subsciptionRouter.delete(
  "/delete/:id",
  authentication,
  removeFromMySubscription
);

//create end point to add Video to LikesContoller

subsciptionRouter.post("/add/:id", authentication, addToSubscription);

subsciptionRouter.get("/allVideos", authentication, getAllvideossubscripes);

subsciptionRouter.get(
  "/mySubsciption",
  authentication,
  getMySubscriptionChannels
);
subsciptionRouter.get("/videos", authentication, getAllvideossubscripes);
//create end point to delete Video from LikesContoller

module.exports = { subsciptionRouter };
