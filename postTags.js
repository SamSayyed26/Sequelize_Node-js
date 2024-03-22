const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const PostTags = sequelize.define("postTags", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        tagId: {
            type: Sequelize.UUID,
            allowNull: false
        },
        postId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    }, { timestamps: false }
    );

    Object.assign(PostTags, require("./model_methods/model_methods"))
    return PostTags;
}