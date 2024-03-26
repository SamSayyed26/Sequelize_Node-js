const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Tag = sequelize.define('Tags', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Tag.associate = (models) => {
    Tag.belongsToMany(models.Posts, { foreignKey: 'tagId', through: models.PostTags });
}

Object.assign(Tag, require("../src/modules/tags/services/tag"))
module.exports = Tag;

