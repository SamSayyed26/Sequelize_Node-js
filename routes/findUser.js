var express = require('express');
var router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/users")(sequelize, DataTypes);

router.get('/', function (req, res, next) {
    const id = req.query.id;
    console.log("ID: ", id)
    UserModel.getUser(id)
        .then(response => {
            res.json({ response })
        })
        .catch(err => {
            res.json({ err })
        })

})

module.exports = router;