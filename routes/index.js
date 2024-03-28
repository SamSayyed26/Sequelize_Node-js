var express = require('express');
const router = express.Router();

var auth = require('../src/modules/auth/routes/auth');
var users = require('../src/modules/users/routes/user');
var posts = require("../src/modules/posts/routes/post");
var comments = require("../src/modules/comments/routes/comment");
var reactions = require("../src/modules/reactions/routes/reaction");

router.use('/auth', auth);
router.use('/users', users);
router.use('/posts', posts);
router.use('/posts/:postId/comments', comments);
router.use("/posts/:postId/reaction", reactions);


router.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

module.exports = router;
