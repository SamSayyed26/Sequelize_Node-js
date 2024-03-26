const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Reaction = sequelize.define('Reactions', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    postId: {
        type: DataTypes.UUID,
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
}

Object.assign(Reaction, require("../src/modules/reactions/services/reaction"))
module.exports = Reaction;

