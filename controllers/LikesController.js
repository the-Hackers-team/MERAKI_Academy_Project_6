const { connection } = require("../database/db");

const getLikedVideosByUserId = () => {
  const userId = req.token.userId;
  const query = `select videos.image,videos.user_id,users.image,description,title,video_views,firstName,lastName from Liked_videos inner 
  join users on Liked_videos.user_id = users.id inner join videos on Liked_videos.video_id = videos.id where users.id = ? and videos.is_deleted =0`;

  const data = [userId];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server error`,
        err: err,
      });
    } else {
      if (!result.length) {
        return res.status(200).json({
          success: false,
          message: "Liked_Videos empty",
        });
      }
      res.status(200).json({
        success: true,
        message: `Liked_Videos for the user with id => ${userId}`,
        results: result,
      });
    }
  });
};

const addToLikedVideos = (req, res) => {
  const userId = req.token.userId;
  const videoId = req.params.id;
  const query = `insert into Liked_Videos (user_id, video_id) values (?,?)`;
  const data = [userId, videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server error`,
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(200).json({
          success: false,
          message: "video Id deosnt exist",
        });
      }
      res.status(200).json({
        success: true,
        message: `Liked has been submitted`,
        results: result,
      });
    }
  });
};

const deleteLikedVideos = (req, res) => {
  const userId = req.token.userId;
  const videoId = req.params.id;
  const query = `update Liked_Videos set is_deleted =1 where video_id=? and user_id=? and is_deleted =0`;
  const data = [videoId, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Server error`,
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(200).json({
          success: false,
          message: "video Id deosnt exist",
        });
      }
      res.status(200).json({
        success: true,
        message: `Liked has been removed`,
        results: result,
      });
    }
  });
};

module.exports = {
  deleteLikedVideos,
  addToLikedVideos,

  getLikedVideosByUserId,
};
