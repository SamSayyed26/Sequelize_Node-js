const express = require("express");
const router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/users")(sequelize, DataTypes);
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

require('dotenv').config();
const JWT_SECRET_KEY = process.env.SECRET_KEY;

router.get('/', (req, res, next) => {
    const userLoginObj = req.body;

    UserModel.login(userLoginObj.email)
        .then(user => {
            // try {
            bcrypt.compare(userLoginObj.password, user.password, (error, isPasswordMatched) => {
                if (error) {
                    return res.status(500).json({ message: "Internal Server Error" });
                }
                if (isPasswordMatched) {
                    const token = jwt.sign({ userEmail: userLoginObj.email }, JWT_SECRET_KEY, { expiresIn: '1h' })
                    return res.json({ message: `Welcome ${user.firstName} ${user.lastName}`, token: token });
                } else {
                    return res.status(401).json({ message: "Incorrect Password" });
                }
            });


            // } catch (err) {
            //     res.json({ message: "Incorrect Password" });
            // }

            // .then(matched => {
            //     res.json({ message: `Welcome ${user.firstName} ${user.lastName}` })
            // }).catch(err => {
            //     res.json({ message: "Incorrect Password" });
            // })
        })
        .catch(err => {
            res.json({ message: "User Not Found" })
        })
})

module.exports = router;