const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Comment = sequelize.define("Comments", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
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

Object.assign(Comment, require("../src/modules/comments/services/comment"))
module.exports = Comment;
