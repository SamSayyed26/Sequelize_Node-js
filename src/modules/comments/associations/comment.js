const CommentsModel = require("../../../../models/Comments");
const PostsModel = require("../../../../models/Posts");
const UsersModel = require("../../../../models/Users");

CommentsModel.associate = (models) => {
    CommentsModel.belongsTo(PostsModel, { foreignKey: 'postId' });
    CommentsModel.belongsTo(UsersModel, { foreignKey: 'userId' });
}

