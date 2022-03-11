const { connection } = require("../database/db");

const addToSubscription = (req, res) => {
  const chanelId = req.params.id;
  const userId = req.token.userId;
  const query = `insert into subscriptions (chanel_id , user_id) values (?,?)`;

  const data = [chanelId, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Something went wrong in subscription`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: `supscription done successfully`,
      results: result,
    });
  });
};

const removeFromMySubscription = (req, res) => {
  const chanelId = req.params.id;
  const userId = req.token.userId;
  const query = `update subscriptions set is_deleted = 1 where user_id = ? and chanel_id = ? where is_deleted=0`;

  const data = [chanelId, userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Something went wrong in subscription`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: `supscription done successfully`,
      results: result,
    });
  });
  ``;
};

const getMySubscriptionChannels = (req, res) => {
  const userId = req.token.userId;
  const query = `select users.id,firstName,lastName,users.user_image from subscriptions INNER JOIN users ON users.id = subscriptions.chanel_id where user_id=? is_deleted = 0 `;
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
        .json({ success: true, message: `All the channels`, results: result });
    }
  });
};
const getAllvideossubscripes = (req, res) => {
  const userId = req.token.userId;
  const query = `SELECT
  videos.id,title,description,firstName,videos.user_id, users.user_image,videos.image,category
  FROM
  subscriptions
  INNER JOIN
    users
  ON
    users.id=watch_later.user_id where users.id = ? and users.is_deleted =0 and watch_later.is_deleted=0
  INNER JOIN
  videos
  ON
  videos.id = watch_later.video_id`;
  // const query = `select users.id,firstName,lastName,users.user_image ,video_link,video.image from subscriptions INNER JOIN users ON users.id = subscriptions.chanel_id where user_id=? is_deleted = 0 `;
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
        .json({ success: true, message: `All the channels`, results: result });
    }
  });
};

module.exports = {
  addToSubscription,
  removeFromMySubscription,
  getMySubscriptionChannels,
};
