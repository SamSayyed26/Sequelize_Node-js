const { Sequelize, DataTypes } = require("sequelize");
require('dotenv').config();
var clc = require("cli-color");

const fs = require('fs');
const path = require('path');
var __dirname = path.resolve();

const dbName = process.env.DATABASE_NAME;
const dbPassword = process.env.DATABASE_PASSWORD;
const dbUsername = process.env.DATABASE_USERNAME;

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
    host: 'localhost',
    dialect: 'postgres',
});


sequelize
    .authenticate()
    .then(() => {
        console.log(clc.green("\n****************"));
        // console.log("Dir name", path.join(path.join(__dirname, 'models'), 'users'))

        console.log(clc.green("Connection Established Successfully"));
        console.log(clc.green("****************\n"));
    })
    .catch(err => {
        console.log(clc.red("\n################"));
        console.log(clc.red("Something went wrong with the connection => ", err));
        console.log(clc.red("################\n"));
        process.exit(1);
    });


const db = require("../models");
db.sequelize
    .sync()
    .then(() => {
        console.log(clc.green("****************"));
        console.log(clc.green("Models created Successfully"));
        console.log(clc.green("****************\n"));
    })
    .catch(err => {
        console.log(clc.red("################"));
        console.log(clc.red("Something went wrong while creating models => ", err));
        console.log(clc.red("################"));
    })

module.exports = { sequelize, DataTypes };