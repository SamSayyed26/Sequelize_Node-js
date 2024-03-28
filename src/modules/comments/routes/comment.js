const express = require("express");
const router = express.Router({ mergeParams: true });

const verifyToken = require("../../../middlewares/authMiddleware");
const { CommentSchema } = require("../schema/comment");
const { validate } = require("../../../middlewares/validate");
const CONSTANTS = require("../../../constants/constants");

const CommentsModel = require("../../../../models/Comments");
const UsersModel = require("../../../../models/Users");
const PostsModel = require("../../../../models/Posts");


/* ------------------------- COMMENTS ------------------------- */

/* ADD COMMENT */
router.post("/", verifyToken, CommentSchema.createComment, validate, (req, res, next) => {
    const commentObj = req.body;
    const postId = req.params.postId;
    console.log("POST ID ==> ", postId);
    if (res.locals.authenticatedUser && postId) {
        const userID = res.locals.authenticatedUser;
        commentObj['userId'] = userID;
        commentObj['postId'] = postId;
        CommentsModel.uploadComment(commentObj)
            .then(() => {
                res.json({ message: "Comment uploaded successfully" })
            })
            .catch(err => {
                console.error("Err => ", err);
                res.json({ messsgae: "Error while uploading the comment" })
            });

    }
    else {
        res.json({ message: `PostID cannot be ${postId}` })
    }
});

/* UPDATE COMMENT */
router.put("/:commentId", verifyToken, (req, res, next) => {
    const commentObj = req.body;
    const commentId = req.params.commentId;

    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;

        CommentsModel.findCommentByID(commentId, userID)
            .then(comment => {
                if (comment) {
                    CommentsModel.updateComment(commentObj, comment.id)
                        .then(comment => {
                            res.json({ message: "Comment updated successfully" });
                        })
                        .catch((err => {
                            console.error("Err => ", err);
                            res.json({ error: "Error while updating the comment" });
                        }))
                } else {
                    res.json({ error: "You are not the author of this comment" });
                }
            })
            .catch(err => {
                console.error("Err => ", err);
                res.json({ error: "Comment not found" });
            })
    }
});

/* DELETE COMMENT */
router.delete("/:commentId", verifyToken, (req, res, next) => {
    const commentID = req.params.commentId;
    const postID = req.params.postId;

    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;

        UsersModel.getUserById(userID)
            .then(user => {
                if (user.role === CONSTANTS.ROLES.CONTENT_CREATOR) {
                    console.log("USer: ", user)
                    PostsModel.getPostByID(postID, userID)
                        .then(post => {
                            if (post) {
                                CommentsModel.matchPostIDInComment(postID, commentID)
                                    .then(comment => {
                                        CommentsModel.deleteComment(comment.id)
                                            .then(comment => {
                                                res.json({ message: "Comment deleted successfully" });
                                            })
                                            .catch((err => {
                                                console.error("Err => ", err);
                                                res.json({ error: "Error while deleting the comment" });
                                            }))
                                    })
                                    .catch(err => {
                                        console.error("Err => ", err);
                                        res.json({ error: "Unable to find the comment" });
                                    })
                            }
                            else {
                                res.json({ error: "This comment is not on this post" })
                            }
                        })
                }
                else {
                    CommentsModel.findCommentByID(commentID, userID)
                        .then(comment => {
                            if (comment) {
                                console.log("Comment: ", comment);
                                CommentsModel.deleteComment(comment.id)
                                    .then(comment => {
                                        res.json({ message: "Comment deleted successfully" });
                                    })
                                    .catch((err => {
                                        console.error("Err => ", err);
                                        res.json({ error: "Error while deleting the comment" });
                                    }))
                            } else {
                                res.json({ error: "Comment not found" });
                            }
                        })
                        .catch(err => {
                            console.error("Err => ", err);
                            res.json({ error: "You are not the author of this comment" });
                        })
                }

            })
    }
});

/* GET COMMENTS OF A POST */
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
});

module.exports = router