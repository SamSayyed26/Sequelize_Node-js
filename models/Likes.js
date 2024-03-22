const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Likes = sequelize.define("Likes", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        postId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    });

    Likes.associate = (models) => {
        Likes.belongsTo(models.Posts, { foreignKey: 'postId' })
        Likes.belongsTo(models.Users, { foreignKey: 'userId' })
    }

    Object.assign(Likes, require("../model_methods/model_methods"))
    return Likes;
}