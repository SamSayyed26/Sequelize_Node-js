const TagsModel = require("../../../../models/Tags");
const PostsModel = require("../../../../models/Posts");
const PostTagsModel = require("../../../../models/PostTags");

TagsModel.associate = (models) => {
    TagsModel.belongsToMany(PostsModel, { foreignKey: 'tagId', through: PostTagsModel });
}