const express = require("express");
const router = express.Router();
const UsersModel = require("../../../../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = require("../../users/schema/user");
const { validate } = require("../../../middlewares/validate");
const CONSTANTS = require("../../../constants/constants");

require('dotenv').config();
const JWT_SECRET_KEY = process.env.SECRET_KEY;

/* SIGNUP */
router.post('/signup', userSchema.createUser, validate, async function (req, res, next) {
    const userObj = req.body;

    UsersModel.checkUnique(userObj.email)
        .then(userFound => {
            if (userFound) {
                res.json({ data: userFound.firstName + ' ' + userFound.lastName, message: `User with email ${userFound.email} Already Exists` });
            }
            else {
                // Hashing Password
                // bcrypt.hash(userObj.password, 10)
                //     .then(pass => {
                //         userObj.password = pass;
                userObj['role'] = CONSTANTS.ROLES.VIEWER;
                // Adding User
                UsersModel.addUser(userObj)
                    .then((user) => {
                        res.json({ data: user.firstName + ' ' + user.lastName, message: `User successfully created` });
                    })
                    .catch(err => {
                        console.error(err)
                        res.send(err)
                    })
                // })
                // .catch(err => {
                //     console.log("Error while hashing the password =>", err);
                //     res.json({ error: "Something went wrong while creating the user" })
                // });
            }
        })
        .catch(err => {

        })
});

/* LOGIN */
router.get('/login', (req, res, next) => {
    const userLoginObj = req.body;

    UsersModel.login(userLoginObj.email)
        .then(user => {
            bcrypt.compare(userLoginObj.password, user.password, (error, isPasswordMatched) => {
                if (error) {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
                if (isPasswordMatched) {
                    const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, { expiresIn: '7h' })
                    return res.json({ message: `Welcome ${user.firstName} ${user.lastName}`, token: token });
                } else {
                    return res.status(401).json({ message: "Incorrect Password" });
                }
            });
        })
        .catch(err => {
            res.json({ message: "User Not Found" })
        })
});

module.exports = router;
