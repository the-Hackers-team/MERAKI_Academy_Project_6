const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");
const { videoRouter } = require("./routes/videoRouter");
const { userRouter } = require("./routes/userRouter");
const { roleRouter } = require("./routes/roleRouter");
const { commentRouter } = require("./routes/commentRouter");
const { watch_laterRouter } = require("./routes/watchLaterRouter");
const { LikedRouter } = require("./routes/likeRouter");
const { subsciptionRouter } = require("./routes/subscriptionRouter")
app.use(cors());

app.use(express.json());

//create video route with path of "/video"
app.use("/video", videoRouter);

//create user route with path of "/user"

app.use("/user", userRouter);

//create comment route with path of "/comment"

app.use("/comment", commentRouter);

//create role route with path of "/role"

app.use("/role", roleRouter);

//create watchLater route with path of "/watchLater"

app.use("/watchLater", watch_laterRouter);

//create like route with path of "/like"

app.use("/like", LikedRouter);

app.use("/subscription,",subsciptionRouter)

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
