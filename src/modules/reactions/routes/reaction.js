const express = require("express");
const router = express.Router({ mergeParams: true });

const verifyToken = require("../../../middlewares/authMiddleware");
const ReactionsModel = require("../../../../models/Reactions");


router.post("/like", verifyToken, (req, res, next) => {
    let postId = req.params.postId;
    if (res.locals.authenticatedUser && postId) {
        let userId = res.locals.authenticatedUser;

        ReactionsModel.findReaction(postId, userId)
            .then(reaction => {
                if (reaction) {
                    // console.log("Liked: ", reaction.like);
                    const updatedReactionObj = {
                        like: !reaction.like,
                        dislike: false
                    }
                    if (!reaction.like) {
                        ReactionsModel.updateReaction(updatedReactionObj, postId, userId)
                            .then(updatedReaction => {
                                res.json({ message: "You've liked this post" });
                            })
                    }
                    else {
                        ReactionsModel.deleteReaction(postId, userId)
                            .then(reaction => {
                                res.json({ message: "Like removed" });
                            })
                            .catch(err => {
                                console.error("Err => Could not remove like");
                                res.json({ error: "Unable to remove like" });
                            })
                    }
                }
                else {
                    const likeObj = {
                        postId: postId,
                        userId: userId,
                        like: true,
                        dislike: false
                    };

                    ReactionsModel.uploadReaction(likeObj)
                        .then(reaction => {
                            res.json({ message: "You've liked this post" });
                        })
                        .catch(err => {
                            console.log("Err => Something went wrong while updating the reaction");
                            res.json({ error: "Could not upload reaction" });
                        })
                }
            })


    }
    else {
        res.json({ message: `PostID cannot be ${postId}` })
    }
});

router.post("/dislike", verifyToken, (req, res, next) => {
    let postId = req.params.postId;
    if (res.locals.authenticatedUser && postId) {
        let userId = res.locals.authenticatedUser;

        ReactionsModel.findReaction(postId, userId)
            .then(reaction => {
                if (reaction) {
                    // console.log("Disliked: ", reaction.dislike);
                    const updatedReactionObj = {
                        like: false,
                        dislike: !reaction.dislike
                    }
                    if (!reaction.dislike) {
                        ReactionsModel.updateReaction(updatedReactionObj, postId, userId)
                            .then(updatedReaction => {
                                res.json({ message: "You've Disliked this post" });
                            })
                    }
                    else {
                        ReactionsModel.deleteReaction(postId, userId)
                            .then(reaction => {
                                res.json({ message: "Dislike removed" });
                            })
                            .catch(err => {
                                console.error("Err => Could not remove dislike");
                                res.json({ error: "Unable to remove dislike" });
                            })
                    }
                }
                else {
                    const DislikeObj = {
                        postId: postId,
                        userId: userId,
                        like: false,
                        dislike: true
                    };

                    ReactionsModel.uploadReaction(DislikeObj)
                        .then(reaction => {
                            res.json({ message: "You've Disliked this post" });
                        })
                        .catch(err => {
                            console.log("Err => Something went wrong while updating the reaction");
                            res.json({ error: "Could not upload reaction" });
                        })
                }
            })


    }
    else {
        res.json({ message: `PostID cannot be ${postId}` })
    }
});

module.exports = router