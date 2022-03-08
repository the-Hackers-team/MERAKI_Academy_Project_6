const express = require("express");
const authentication = require("../middleware/authentication");
//create video router
const videoRouter = express.Router();
// import videos comtrollers from "videoControllers"

const {
    createNewVideo,
    getAllVideos,
    getAnVideoById,
    getAnVideoByCategory,
    deleteAnVideoById,
    deleteAnVideoByUserId,
    updateAnVideoById,
    addToLikedVideos,
  removedisLikeVideo,
  removeLikeOnVideo,
  disLikeVideo
} = require("../controllers/videoController.js");

//create end points

//1- create  new video

videoRouter.post("/", authentication, createNewVideo);

//2-  get all videos

videoRouter.get("/", getAllVideos);

//3- for get video by id

videoRouter.get("/search_1", getAnVideoById);

//4- get video by category

//category

videoRouter.get("/search_2", getAnVideoByCategory);

//5- delete video by id

videoRouter.delete("/delete_1/:id", authentication, deleteAnVideoById);

//6- delete video by user_id

videoRouter.delete(
  "/delete_2/:user_id",
  authentication,
  deleteAnVideoByUserId
);
////////////////////////////// add like on specific video
videoRouter.post("/addLikeOnVideo/:id", authentication, addToLikedVideos);

videoRouter.delete("/removeLikeOnVideo/:id", authentication, removeLikeOnVideo);

videoRouter.post("/addDisLikeOnVideo/:id", authentication, disLikeVideo);


videoRouter.delete("/removeDisLikeOnVideo/:id", authentication, removedisLikeVideo);

//7- update video

videoRouter.put("/update/:id", authentication, updateAnVideoById);

module.exports = { videoRouter };
