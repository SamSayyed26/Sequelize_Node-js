const express = require("express");
const router = express.Router();
var app = express();
const verifyToken = require("../../middlewares/authMiddleware");
const comments = require("../../comments/routes/comment")
const UsersModel = require("../../../../models/Users");
const PostsModel = require("../../../../models/Posts");
const TagsModel = require("../../../../models/Tags");


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
app.use('/:postId/comments', comments);


module.exports = router