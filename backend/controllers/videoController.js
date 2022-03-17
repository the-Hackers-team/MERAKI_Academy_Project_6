//import connenction from database
const { connection } = require("../database/db.js");

//create controller for create New product

const createNewVideo = (req, res) => {
  const {
    title,
    description,
    video_views,
    image,
    category,
    video_link,
    Likes,
    Dislikes,
  } = req.body;
  const user_id = req.token.userId;

  const query = `insert into videos (title, description, video_link, image,user_id,category) values (?,?,?,?,?,?)`;

  const data = [title, description, video_link, image, user_id, category];

  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Something went wrong While creating video`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: `video uploaded`,
      results: result,
    });
  });
};

//create controller for getAllVideos
const getChannelVideos = (req, res) => {
  const userId = req.params.id;
  const query = `select * from videos  where is_deleted = 0 and user_id =?`;
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(404)
        .json({ success: false, message: "server error", err: err });
    } else {
      res
        .status(200)
        .json({ success: true, message: `All the videos`, results: result });
    }
  });
};

//create controller for getAnVideoById

const getAnVideoById = (req, res) => {
  const video_Id = req.query.id;

  const query = `SELECT title,videos.id,description,videos.publish_date,video_link,firstName,user_id,Likes ,Dislikes,users.user_image,videos.image,video_views,category FROM users INNER JOIN videos ON users.id=videos.user_id where videos.id = ? and videos.is_deleted =0 and videos.is_deleted =0 and users.is_deleted = 0`;

  const data = [video_Id];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.length) {
        return res.status(200).json({
          success: false,
          message: `No video found with the indicated  id => ${video_Id}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The video id=> ${video_Id} `,
        results: result,
      });
    }
  });
};
// No products found with the indicated category

//create controller for getAnVideoByCategory
const getAnVideoByCategory = (req, res) => {
  const category = req.query.category;

  const query = `SELECT title,videos.id,description,video_link,firstName,user_id,Likes ,Dislikes,users.user_image,videos.image,video_views,category FROM users INNER JOIN videos  ON users.id=videos.user_id where videos.category = ? and videos.is_deleted = 0`;

  const data = [category];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.length) {
        return res.status(200).json({
          success: false,
          message: "No videos found with the indicated category",
          results: result,
        });
      }
      res.status(200).json({
        success: true,
        message: `All videos with Category=> ${category}`,
        results: result,
      });
    }
  });
};

//create controller for deleteAnVideoById

const deleteAnVideoById = (req, res) => {
  const video_Id = req.params.id;
  const userId = req.token.userId;
  const query = `UPDATE videos SET is_deleted =1 where id=? AND user_id = ?`;
  const data = [video_Id, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "server error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `The video: ${video_Id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Succeeded to delete video with id: ${video_Id}`,
      });
    }
  });
};

//create controller for deleteAnVideoByUserId/////cancel dont use it
const deleteAnVideoByUserId = (req, res) => {
  const userId = req.token.user_id;
  const query = `UPDATE videos SET is_deleted =1 where user_id=? and is_deleted =0`;
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `No videos found with the indicated  user_id => ${userId}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The videos with user_id was deleted=> ${userId} `,
      });
    }
  });
};

//create controller for updateAnVideoById
const updateAnVideoById = (req, res) => {
  const userId = req.token.userId;
  console.log(userId);
  const video_Id = req.params.id;
  console.log(video_Id);
  const { title, description, image, category, video_link } = req.body;

  const query = `UPDATE videos SET title=?,description=?,video_link=?,image=? , category=?  where id=? and user_id=? and is_deleted =0`;
  const data = [
    title,
    description,
    video_link,
    image,
    category,
    video_Id,
    userId,
  ];

  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(404).json({
        success: false,
        message: `server error`,
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `The video: ${video_Id} is not found or un authorized`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Succeeded to update video with id: ${video_Id}`,
      });
    }
  });
};

//////////////////////////////////////////////
const addLikeOnVideo = (req, res) => {
  const videoId = req.params.id;
  const query = ` update videos SET Likes = Likes+1 where  id = ?`;
  const data = [videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      returnres.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `No videos found with the indicated  videoId => ${videoId}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Like has been added`,
      });
    }
  });
};

const disLikeVideo = (req, res) => {
  const videoId = req.params.id;
  const query = ` update videos SET Dislikes = Dislikes+1 where  id = ?`;
  const data = [videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `No videos found with the indicated  videoId => ${videoId}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `DisLike has been added`,
      });
    }
  });
};

const removeLikeOnVideo = (req, res) => {
  const videoId = req.params.id;
  const query = ` update videos SET Likes = Likes-1 where  id = ?`;
  const data = [videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `No videos found with the indicated  videoId => ${videoId}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Like has been removed`,
      });
    }
  });
};

const removedisLikeVideo = (req, res) => {
  const videoId = req.params.id;
  const query = ` update videos SET Dislikes = Dislikes-1 where  id = ?`;
  const data = [videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err,
      });
    } else {
      if (!result.affectedRows) {
        return res.status(404).json({
          success: false,
          message: `No videos found with the indicated  videoId => ${videoId}`,
        });
      }
      res.status(200).json({
        success: true,
        message: `DisLike has been removed`,
      });
    }
  });
};

///////////////////////////////////////////////////////////////////

module.exports = {
  createNewVideo,
  getChannelVideos,
  getAnVideoById,
  getAnVideoByCategory,
  deleteAnVideoById,
  deleteAnVideoByUserId,
  updateAnVideoById,
  ///////////////////////

  addLikeOnVideo,
  removedisLikeVideo,
  removeLikeOnVideo,
  disLikeVideo,
  //////////////
};
