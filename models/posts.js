const { Sequelize, DataTypes } = require("sequelize");
// const models = require("../models").models;
const Users = require("../models/users.js")

module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define('Posts', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            // type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });

    Posts.associate = (models) => {
        Posts.belongsTo(models.Users);
    };
    Object.assign(Posts, require("../model_methods/model_methods.js"))
    return Posts;
}
