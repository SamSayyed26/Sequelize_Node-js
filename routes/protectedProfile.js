const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { sequelize, DataTypes } = require('../database/server');
const PostsModel = require("../models/posts")(sequelize, DataTypes)
const UsersModel = require("../models/users")(sequelize, DataTypes)


router.get("/", verifyToken, (req, res, next) => {
    res.json({ message: "Protected Route Accessed" })
});

router.post("/", verifyToken, (req, res, next) => {
    const postObj = req.body;
    console.log("User: ", req.user)
    if (res.locals.authenticatedUser) {
        const userEmail = res.locals.authenticatedUser;
        console.log("userEmail: ", userEmail)
        UsersModel.getUserId(userEmail)
            .then(user => {
                postObj['userId'] = user.id;
                PostsModel.uploadPost(postObj)
                    .then(data => {
                        res.json({ message: "Post uploaded successfully" });
                    })
                    .catch(err => {
                        console.error("ERROR: ", err)
                        res.send({ message: "Error while creating the post" });
                    })
            })
            .catch(err => {
                console.error("Error: ", err);
                res.json({ message: "Error while fetching the user" });
            })
    }
});

module.exports = router