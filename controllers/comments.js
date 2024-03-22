const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { sequelize, DataTypes } = require('../database/server');
const CommentsModel = require("../models/Comments")(sequelize, DataTypes);
const UsersModel = require("../models/Users")(sequelize, DataTypes);


// Add a COMMENT
router.post("/", verifyToken, (req, res, next) => {
    const commentObj = req.body;
    const postId = req.query.id;
    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;
        commentObj['userId'] = userID;
        commentObj['postId'] = postId;
        CommentsModel.uploadComment(commentObj)
            .then(() => {
                res.json({ message: "Comment uploaded successfully" })
            })
            .catch(err => {
                console.error("Err=> ", err);
                res.json({ messsgae: "Error while uploading the comment" })
            });

    }
});

// Get Comments of a Post
router.get("/", verifyToken, (req, res, next) => {
    const postId = req.query.id;
    CommentsModel.getCommentsByPost(postId)
        .then((comments) => {
            res.json({ messgae: "Comments", data: comments })
        })
        .catch(err => {
            console.error("Err => ", err);;
            res.json({ message: "Error while fetching the comments" })
        })
})

module.exports = router;