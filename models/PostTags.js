const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const PostTags = sequelize.define('PostTags', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    tagId: {
        type: DataTypes.UUID,
        allowNull: false
    },
});

// PostTags.associate = (models) => {
//     PostTags.belongsTo(models.Posts, { foreignKey: 'postId' });
//     PostTags.belongsTo(models.Tags, { foreignKey: 'tagId' });
// }

Object.assign(PostTags, require("../src/modules/postTags/services/postTag"))
module.exports = PostTags;
