const express = require("express");
const authentication = require("../middleware/authentication");
//create wish_list_contoller router

const watch_laterRouter = express.Router();

// import wish_list controllers from "watch_laterContoller"

const {
  getwatch_laterByUserId,
  addVideoTowatch_later,
  deleteVideoFromwatch_later,
} = require("../controllers/WatchLaterController");

//cerate end point to get watch_later

watch_laterRouter.get("/", authentication, getwatch_laterByUserId);

//create end point to add Video to watch_later

watch_laterRouter.post("/add/:id", authentication, addVideoTowatch_later);

//create end point to delete Video from watch_later

watch_laterRouter.delete(
  "/delete/:id",
  authentication,
  deleteVideoFromwatch_later
);
module.exports = { watch_laterRouter };
