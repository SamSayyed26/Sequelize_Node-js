const PostTags = require("../../../../models/PostTags")
const PostsModel = require("../../../../models/Posts");
const TagsModel = require("../../../../models/Tags");

PostTags.associate = (models) => {
    PostTags.belongsTo(PostsModel, { foreignKey: 'postId' });
    PostTags.belongsTo(TagsModel, { foreignKey: 'tagId' });
}