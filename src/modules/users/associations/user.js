const UsersModel = require("../../../../models/Users");
const PostsModel = require("../../../../models/Posts");
const CommentsModel = require("../../../../models/Comments");
const ReactionsModel = require("../../../../models/Reactions");

UsersModel.associate = (models) => {
    UsersModel.hasMany(PostsModel, { foreignKey: 'userId' });
    UsersModel.hasMany(CommentsModel, { foreignKey: 'userId' });
    UsersModel.hasMany(ReactionsModel, { foreignKey: 'userId' });
}