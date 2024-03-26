const PostsModel = require("../../../../models/Posts");
const UsersModel = require("../../../../models/Users");
const CommentsModel = require("../../../../models/Comments");
const TagsModel = require("../../../../models/Tags");
const ReactionsModel = require("../../../../models/Reactions");
const PostTagsModel = require("../../../../models/PostTags");

PostsModel.associate = (models) => {
    PostsModel.belongsTo(UsersModel, { foreignKey: 'userId' });
    PostsModel.hasMany(CommentsModel, { foreignKey: 'postId' });
    PostsModel.belongsToMany(TagsModel, { foreignKey: 'postId', through: PostTagsModel });
    PostsModel.hasMany(ReactionsModel, { foreignKey: 'postId' });
}