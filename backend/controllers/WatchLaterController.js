const { connection } = require("../database/db");

//create controller for add new video to watch Later

const getwatch_laterByUserId = (req, res) => {
  const userId = req.token.userId;
  const query = `SELECT
  videos.id,title,description,firstName,videos.user_id,lastName,users.user_image,videos.image,category
  FROM
    watch_later
  INNER JOIN
    videos
  ON
  videos.id = watch_later.video_id
  INNER JOIN
    users
  ON
    users.id=watch_later.user_id where users.id = ? and watch_later.is_deleted=0`;

    //is deleted

/*
videos.id,title,description,,firstName,videos.user_id, users.user_image,videos.image,category
  FROM
    watch_later
  INNER JOIN
    videos
  ON
  videos.id = watch_later.video_id
  INNER JOIN
    users
  ON
    users.id=watch_later.user_id where users.id = ? and users.is_deleted =0 and watch_later.is_deleted=0`;
 */
    
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: `Server error`,
        err: err,

      });
    } else {
      if (!result.length) {
        return res.status(200).json({
          success: false,
          message: "watch_later empty",
        });
      }
      res.status(200).json({
        success: true,
        message: `watch_later for the user with id => ${userId}`,
        results: result,
      });
    }
  });
};

//create controller for add new video to watch_later

const addVideoTowatch_later = (req, res) => {
  const videoId = req.params.id;
  const userId = req.token.userId;
  const query = `INSERT INTO watch_later (user_id , video_id) VALUES (?,?)`;
  const data = [userId, videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Something went wrong while adding to watch_later`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: `The video has been added to watch_later successfully`,
      results: result,
    });
  });
};

//create controller for delete  video to watch_later

const deleteVideoFromwatch_later = (req, res) => {
  const videoId = req.params.id;
  const userId = req.token.userId;
  const query = `UPDATE watch_later SET is_deleted=1 WHERE is_deleted=0 AND video_id = ? And user_id = ?`;
  const data = [videoId, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: `Something went wrong while deleting to watch_later`,
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: "video with id is not found",
        });
      }
      res.status(200).json({
        success: true,
        message: `video with with id deleted => ${videoId}`,
        results: result,
      });
    }
  });
};

module.exports = {
  getwatch_laterByUserId,
  addVideoTowatch_later,
  deleteVideoFromwatch_later,
};
