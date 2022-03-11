const express = require("express");
const authentication = require("../middleware/authentication");
//create comment router

const commentRouter = express.Router();

const {
  createNewComment,
  updateCommentById,
  deleteCommentById,
  deleteCommentByUserId,
  getAllComments,
} = require("../controllers/CommentControllers");

//create end point for create comment

commentRouter.post("/:id", authentication, createNewComment);

//create end point for update comment

commentRouter.put("/:id", authentication, updateCommentById);

//create end point for delete comment by id

commentRouter.delete("/delete_1/:id", authentication, deleteCommentById);

//create end point for get comment by user_id

commentRouter.get("/:id", getAllComments);

commentRouter.delete(
  "/delete_2/:user_id",
  authentication,
  deleteCommentByUserId
);

module.exports = { commentRouter };
