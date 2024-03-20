const sequelize = require("../database/server.js");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Books = sequelize.define('Books', {
        // id: {
        //   type: Sequelize.UUID,
        //   defaultValue: Sequelize.UUIDV4,
        //   // defaultValue: Sequelize.literal('uuid_generate_v4()'),
        //   allowNull: false,
        //   primaryKey: true
        // },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Object.assign(Books, require("../model_methods/model_methods.js"));
    return Books;
}


