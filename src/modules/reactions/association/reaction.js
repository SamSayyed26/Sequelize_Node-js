const ReactionsModel = require("../../../../models/Reactions");
const UsersModel = require("../../../../models/Users");
const PostsModel = require("../../../../models/Posts");

ReactionsModel.associate = (models) => {
    ReactionsModel.belongsTo(UsersModel, { foreignKey: 'userId' });
    ReactionsModel.belongsTo(PostsModel, { foreignKey: 'postId' });
}