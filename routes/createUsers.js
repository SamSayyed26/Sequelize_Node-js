var express = require('express');
var router = express.Router();
const { sequelize, DataTypes } = require('../database/server');
const UserModel = require("../models/users")(sequelize, DataTypes);
const bcrypt = require("bcrypt");

/* Add Users. */
router.post('/', async function (req, res, next) {
  const userObj = req.body;
  console.log("OBJ: ", userObj);

  UserModel.checkUnique(userObj.email)
    .then(userFound => {
      if (userFound) {
        res.json({ data: userFound.firstName + ' ' + userFound.lastName, message: "User Already Exists" });
      }
      else {
        // Hashing Password
        bcrypt.hash(userObj.password, 10)
          .then(pass => {
            userObj.password = pass;
            // Adding User
            UserModel.addUser(userObj)
              .then((user) => {
                res.json({ data: user.firstName + ' ' + user.lastName, message: `User successfully created` });
              })
              .catch(err => {
                console.error(err)
                res.send(err)
              })
          })
          .catch(err => {
            console.log("Error while hashing the password =>", err)
          });
      }
    })
    .catch(err => {

    })
});

module.exports = router;
