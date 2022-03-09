const { connection } = require("../database/db");

const addToSubscription = (req, res) => {
  const chanelId = req.params.id;
  const userId = req.token.userId;
  const query = `insert into subscriptions where chanel_id = ? and user_id = ?`;

  const data = [chanelId, userId];
  connection.query(query, data, (req, res) => {
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
  connection.query(query, data, (req, res) => {
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

const getMySubscriptionChannels = (req, res) => {
  const userId = req.token.userId;
  const query = `select firstName,lastName,users_image from subscriptions INNER JOIN users ON users.id = subscriptions.user_id where user_id=? is_deleted = 0  `;
  const data = [userId];
  connection.query(query, (err, result) => {
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

module.exports = {
  addToSubscription,
  removeFromMySubscription,
  getMySubscriptionChannels,
};
