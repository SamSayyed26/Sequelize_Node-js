const express = require("express");
const router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/users")(sequelize, DataTypes);

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
})

module.exports = router