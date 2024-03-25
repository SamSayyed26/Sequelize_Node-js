const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Reaction = sequelize.define('Reactions', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        postId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        dislike: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    });


    Reaction.associate = (models) => {
        Reaction.belongsTo(models.Users, { foreignKey: 'userId' });
        Reaction.belongsTo(models.Posts, { foreignKey: 'postId' });
    };

    // Post.prototype.addTag = BelongsToManyAddAssociationMixin;

    Object.assign(Reaction, require("../model_methods/model_methods.js"))
    return Reaction;
}
