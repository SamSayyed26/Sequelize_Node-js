const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('Posts', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: Sequelize.UUID,
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
        Post.belongsToMany(models.Tags, { foreignKey: 'postId', through: 'postTags' });
        Post.hasMany(models.Likes, { foreignKey: 'postId' });
    };

    // Post.prototype.addTag = BelongsToManyAddAssociationMixin;

    Object.assign(Post, require("../model_methods/model_methods.js"))
    return Post;
}
