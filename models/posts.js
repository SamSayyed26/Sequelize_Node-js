const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Post = sequelize.define('Posts', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
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
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

Post.associate = (models) => {
    Post.belongsTo(models.Users, { foreignKey: 'userId' });
    Post.hasMany(models.Comments, { foreignKey: 'postId' });
    Post.belongsToMany(models.Tags, { foreignKey: 'postId', through: models.PostTags });
    Post.hasMany(models.Reactions, { foreignKey: 'postId' });
}

Object.assign(Post, require("../src/modules/posts/services/post"))
module.exports = Post;
