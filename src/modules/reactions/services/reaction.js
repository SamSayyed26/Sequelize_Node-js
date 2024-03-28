
module.exports = {
    async uploadReaction(reactionObj) {
        let reaction = await this.create(reactionObj);

        return reaction;
    },

    async findReaction(postId, userId) {
        let reaction = await this.findOne({
            where: {
                postId: postId,
                userId: userId
            }
        });

        return reaction;
    },

    async updateReaction(reactionObj, postId, userId) {
        let reaction = await this.update({
            like: reactionObj.like,
            dislike: reactionObj.dislike
        },
            {
                where: {
                    postId: postId,
                    userId: userId
                }
            }
        );
        return reaction;
    },

    async deleteReaction(postId, userId) {
        let reaction = await this.destroy({
            where: {
                postId: postId,
                userId: userId
            }
        });
        return reaction;
    }
}