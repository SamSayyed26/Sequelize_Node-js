var express = require('express');
var router = express.Router();
var app = express();

var auth = require('../src/modules/auth/routes/auth');
var users = require('../src/modules/users/routes/user');
var posts = require("../src/modules/posts/routes/post");

app.use('/auth', auth);
app.use('/users', users);
app.use('/posts', posts);

router.get("/", (req, res) => {
    res.json({ message: "Hello World" })
})

module.exports = router;
