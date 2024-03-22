var express = require('express');
var router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/Users")(sequelize, DataTypes);
const bcrypt = require("bcrypt");
const verifyToken = require('../middlewares/authMiddleware');

/* Find User by ID */
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    UserModel.getUser(id)
        .then(response => {
            res.json({ response })
        })
        .catch(err => {
            res.json({ err })
        })
});


/* Get All Users */
router.get("/", (req, res) => {
    let usersLimit = req.query.limit;
    let usersOffset = req.query.offset;
    console.log("Limit: ", usersLimit, "Offset: ", usersOffset)
    UserModel.getAllUsers(usersLimit, usersOffset)
        .then(data => {
            res.json({ message: "All Users", data: data })
        })
        .catch(err => {
            res.json({ message: "Unable to get users" })
        })
});

/* UPDATE USER */
router.put("/", verifyToken, (req, res) => {
    const userObj = req.body;
    if (res.locals.authenticatedUser) {
        let userID = res.locals.authenticatedUser;
        bcrypt.hash(userObj.password, 10)
            .then(pass => {
                userObj.password = pass;
                UserModel.updateUser(userID, userObj)
                    .then(user => {
                        res.json({ message: "User updated successfully" });
                    })
                    .catch(err => {
                        console.error("Err => ", err);
                        res.json({ error: "Something went wrong while updating the user" });
                    })
            }).catch(err => {
                res.json({ error: "Something went wrong" });
                console.error("Err => ", err);
            })
    }
});

/* DELETE USER */
router.delete("/", verifyToken, (req, res) => {
    if (res.locals.authenticatedUser) {
        let userID = res.locals.authenticatedUser;
        UserModel.deleteUser(userID)
            .then(user => {
                res.json({ message: `User deleted successfully` });
            })
            .catch(err => {
                console.error("Err => ", err);
                res.json({ error: "Error while deleting the user" });
            })
    }
});

module.exports = router;