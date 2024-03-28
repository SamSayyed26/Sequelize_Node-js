const postTagsModel = require("../../../../models/PostTags")


module.exports = {
    // Posts Methods
    async getAllPosts(offset, limit) {
        let posts = await this.findAndCountAll({
            offset: offset,
            limit: limit
        })
        return posts;
    },

    async uploadPost(postObj, tags) {
        let post = await this.create(postObj);

        tags.forEach(element => {
            console.log("TAGID: ", element.id)
            console.log("Post ID: ", post.id)
            postTagsModel.create({
                tagId: element.id,
                postId: post.id
            })
            // element.addPosts(post);
        });
        return post;
    },

    async getPostByUser(id) {
        let posts = await this.findAll({
            where: {
                userId: id
            }
        })
        return posts;
    },

    async getPostByID(postID, userID) {
        let post = await this.findOne({
            where: {
                id: postID,
                userId: userID
            }
        })
        return post;
    },

    async editPost(userID, postObj, postID) {
        let post = await this.update(
            {
                title: postObj.title,
                content: postObj.content,
                category: postObj.category,
                date: postObj.date
            },
            {
                where: {
                    userId: userID,
                    id: postID
                }
            }
        );
        return post;
    },

    async deletePost(postID) {
        let post = await this.destroy({
            where: {
                id: postID
            }
        });
        return post;
    },

    /* ------------------------------------------------------ */
}