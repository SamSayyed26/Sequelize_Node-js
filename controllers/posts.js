const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { sequelize, DataTypes } = require('../database/server');
const comments = require("../models/Comments");
const { configDotenv } = require("dotenv");
const CommentsModel = require("../models/Comments")(sequelize, DataTypes);
const UsersModel = require("../models/Users")(sequelize, DataTypes);
const PostsModel = require("../models/Posts")(sequelize, DataTypes);
const TagsModel = require("../models/Tags")(sequelize, DataTypes);


/* GET ALL POSTS */
router.get("/", verifyToken, (req, res, next) => {
    const offset = req.query.offset;
    const limit = req.query.limit;

    PostsModel.getAllPosts(offset, limit)
        .then(posts => {
            res.json({ message: "Posts", data: posts })
        })
        .catch(err => {
            console.error("Err => ", err);
            res.json({ error: "Something went wrong while fetching the posts" })
        })
});

/* ADD POST */
router.post("/", verifyToken, (req, res, next) => {
    const postObj = req.body;
    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;
        UsersModel.changeIsContentCreator(userID)
            .then(() => {
                postObj['userId'] = userID;
                TagsModel.createTags(postObj.tags)
                    .then((tags) => {
                        PostsModel.uploadPost(postObj)
                            .then(post => {
                                // post.addTags(tags)
                                //     .then(() => {
                                //         res.json({ message: "Post uploaded successfully" });
                                //     });
                                res.json({ message: "Post uploaded successfully" });
                            })
                    })
            })
            .catch(err => {
                console.error("ERROR: ", err)
                res.send({ message: "Error while uploading Post" });
            })

    }
});

/* EDIT POST */
router.put("/:id", verifyToken, (req, res, next) => {
    const postObj = req.body;
    const postId = req.params.id;
    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;
        postObj['userId'] = userID;
        TagsModel.createTags(postObj.tags)
            .then((tags) => {
                PostsModel.editPost(userID, postObj, postId)
                    .then(post => {
                        if (post.length && post[0] !== 0) {
                            // post.addTags(tags)
                            //     .then(() => {
                            //         res.json({ message: "Post uploaded successfully" });
                            //     });
                            res.json({ message: "Post Edited successfully" });
                        }
                        else {
                            res.json({ message: "Post not found" });
                        }
                    })
            })
            .catch(err => {
                console.error("ERROR: ", err)
                res.send({ message: "Error while Editing Post" });
            })
    }
});

/* DELETE POST */
router.delete("/:id", verifyToken, (req, res, next) => {
    const postId = req.params.id;

    if (res.locals.authenticatedUser) {
        PostsModel.deletePost(postId)
            .then(post => {
                console.log("Post: ", post)
                if (post !== 0) {
                    res.json({ message: "Post Deleted successfully" });
                }
                else {
                    res.json({ message: "Post not found" });
                }
            })
            .catch(err => {
                console.error("ERROR: ", err)
                res.send({ message: "Error while Deleting Post" });
            })
    }
});

/* GET ALL POSTS OF A USER */
router.get("/:id", verifyToken, (req, res, next) => {
    const id = req.params.id;
    PostsModel.getPostByUser(id)
        .then(posts => {
            if (posts.length) {
                res.json({ message: "Posts Found", data: posts })
            }
            else {
                res.json({ message: "This user has no posts" })
            }
        })
        .catch(err => {
            res.json({ message: "Error while fetching the posts" })
        })
});


/* ------------------------- COMMENTS ------------------------- */

/* ADD COMMENT */
router.post("/comments/", verifyToken, (req, res, next) => {
    const commentObj = req.body;
    const postId = req.query.id;
    console.log("POST ID ==> ", postId)
    console.log("In here")
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

/* UPDATE COMMENT */
router.put("/comments/:id", verifyToken, (req, res, next) => {
    const commentObj = req.body;
    const commentId = req.params.id;

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
router.delete("/:postId/comments/:commentId", verifyToken, (req, res, next) => {
    const commentID = req.params.commentId;
    const postID = req.params.postId;

    if (res.locals.authenticatedUser) {
        const userID = res.locals.authenticatedUser;

        UsersModel.getUserById(userID)
            .then(user => {
                console.log("USer: ", user)
                if (user.isContentCreator) {
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
router.get("/comments/", verifyToken, (req, res, next) => {
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