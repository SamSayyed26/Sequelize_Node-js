var express = require('express');
var router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/users")(sequelize, DataTypes);

/* Add Users. */
router.post('/', function (req, res, next) {
  const userObj = req.body;
  console.log("OBJ: ", userObj);

  UserModel.checkUnique(userObj.email)
    .then(userFound => {
      if (userFound) {
        res.json({ userFound });
      }
      else {
        const user = UserModel.addUser(userObj)
          .then(response => {
            res.send(`User successfully created`);
          })
          .catch(err => {
            console.error(err)
            res.send(err)
          })
      }
    })
    .catch(err => {

    })
});

module.exports = router;
