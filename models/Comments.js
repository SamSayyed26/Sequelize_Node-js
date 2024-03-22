const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const Comment = sequelize.define("Comments", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        postId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Comment.associate = (models) => {
        Comment.belongsTo(models.Posts, { foreignKey: 'postId' });
        Comment.belongsTo(models.Users, { foreignKey: 'userId' });
    }

    Object.assign(Comment, require("../model_methods/model_methods"))
    return Comment;
}