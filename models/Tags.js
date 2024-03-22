const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define('Tags', {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Tag.associate = (models) => {
        Tag.belongsToMany(models.Posts, { foreignKey: 'tagId', through: 'postTags' });
    };

    Object.assign(Tag, require("../model_methods/model_methods.js"))
    return Tag;
}
