
module.exports = {

    // Comments Methods
    async uploadComment(commentObj) {
        let comment = await this.create(commentObj);
        return comment;
    },

    async getCommentsByPost(postId) {
        let comments = await this.findAll({
            where: {
                postId: postId
            }
        })
        return comments;
    },

    async updateComment(commentObj, commentId) {
        let comment = await this.update(
            {
                comment: commentObj.comment
            },
            {
                where: {
                    id: commentId
                }
            }
        );
        return comment;
    },

    async findCommentByID(commentID, userID) {
        let comment = await this.findOne({
            where: {
                id: commentID,
                userId: userID
            },
            // include: [{
            //     model: UsersModel,
            //     as: 'user'
            // }]
        });
        return comment;
    },

    async deleteComment(commentID) {
        let comment = await this.destroy({
            where: {
                id: commentID
            }
        });
        return comment;
    },

    async matchPostIDInComment(postID, commentID) {
        let comment = await this.findOne({
            where: {
                id: commentID,
                postId: postID
            }
        });
        return comment;
    },

    /* ------------------------------------------------------ */

}