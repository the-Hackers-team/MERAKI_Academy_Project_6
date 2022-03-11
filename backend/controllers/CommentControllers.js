//import connenction from database
const { connection } = require("../database/db");

//create controller for create New comment

const createNewComment = (req, res) => {
  const videoId = req.params.id;
  const { comment } = req.body;
  const user_id = req.token.userId;
  const query = `insert into comments (comment,user_id,video_id) values (?,?,?) `;
  const data = [comment, user_id, videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: `Something went wrong while creating a new comment`,
        err: err,
      });
    }
    res.status(200).json({
      success: true,
      message: `The comment has been created successfully`,
      results: result,
    });
  });
};

//create controller for update comment by id

const updateCommentById = (req, res) => {
  const commentId = req.params.id;
  const { comment } = req.body;
  const query = `update comments set comment = ? where id = ? And is_deleted = 0`;
  const data = [comment, commentId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, message: `Server Error`, error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(200).json({
        success: false,
        message: `no comments found with the indicated ${commentId}`,
      });
    }
    res.status(201).json({
      success: true,
      message: `comment updated successfully`,
      results: result,
    });
  });
};

//create controller for delete  comment by id

const deleteCommentById = (req, res) => {
  const commentId = req.params.id;
  const query = `update comments set is_deleted = 1 where id=?`;
  const data = [commentId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: `Server Error`, error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(200).json({
        success: false,
        message: `no comments found with the indicated ${commentId}`,
      });
    }
    res.status(201).json({
      success: true,
      message: `comment deleted successfully`,
      results: result,
    });
  });
};

//create controller for delete  comment by user_id

const deleteCommentByUserId = (req, res) => {
  const userId = req.params.user_id;
  const query = `update comments set is_deleted=1 where user_id=?`;
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: `Server Error`, error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(200).json({
        success: false,
        message: `no user found with the inducated ${userId}`,
      });
    }

    res.status(201).json({
      success: true,
      message: `comment deleted successfully`,
      results: result,
    });
  });
};
/// create get all comment function/backend
const getAllComments = (req, res) => {
  const videoId = req.params.id;
  const query = `select firstName,lastName,users.user_image,comments.user_id,comments.id,comment,comments.publish_date from comments inner join users on comments.user_id = users.id inner join videos on comments.video_id = videos.id where videos.id =? and comments.is_deleted= 0`;
  const data = [videoId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "server error", err: err });
    } else {
      if (!result.length) {
        return res.status(200).json({
          success: false,
          message: `There is not comment on this product`,
          results: result,
        });
      }

      res
        .status(200)
        .json({ success: true, message: `All the comments`, results: result });
    }
  });
};

module.exports = {
  createNewComment,
  updateCommentById,
  deleteCommentById,
  deleteCommentByUserId,
  getAllComments,
};
