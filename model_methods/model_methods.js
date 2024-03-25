// const { sequelize, DataTypes } = require('../database/server');
// const UsersModel = require("../models/Users")(sequelize, DataTypes);

module.exports = {
    // User Methods
    async addUser(userObj) {
        let user = await this.create(userObj)
        return user;
    },
    checkUnique(email) {
        let user = this.findOne({
            where: {
                email: email
            },
            attributes: { exclude: ['password'] }
        })
        return user;
    },
    getUser(id) {
        let user = this.findOne({
            where: {
                id: id
            }
        })
        return user;
    },
    login(email) {
        let user = this.findOne({
            where: {
                email: email
            }
        })
        return user;
    },
    async getAllUsers(limit, offset) {
        let users = await this.findAndCountAll({
            offset: offset,
            limit: limit,
            attributes: { exclude: ['password'] },
        });
        return users;
    },

    getUserById(id) {
        let user = this.findOne({
            where: {
                id: id
            },
            attributes: ['id', 'isContentCreator']
        })
        return user;
    },

    async updateUser(userID, userObj) {
        let user = await this.update(
            {
                firstName: userObj.firstName,
                lastName: userObj.lastName,
                email: userObj.email,
                password: userObj.password,
            },
            {
                where: {
                    id: userID
                },
            });
        return user;
    },

    async deleteUser(userID) {
        const user = this.destroy({
            where: {
                id: userID
            }
        });
        return user;
    },

    async changeIsContentCreator(userID) {
        const user = this.update({
            isContentCreator: true
        }, {
            where: {
                id: userID
            }
        });
        return user;
    },

    /* ------------------------------------------------------ */

    // Tags Methods
    async createTags(tags) {
        const allTags = [];
        tags.forEach(element => {
            allTags.push(this.create({ name: element }))
        });
        return Promise.all(allTags);
    },

    /* ------------------------------------------------------ */


    // Posts Methods
    async getAllPosts(offset, limit) {
        let posts = await this.findAndCountAll({
            offset: offset,
            limit: limit
        })
        return posts;
    },

    async uploadPost(postObj) {
        let post = await this.create(postObj);

        // tags.forEach(element => {
        //     console.log("TAGID: ", element.id)
        //     post.addTag(element)
        //     // element.addPosts(post);
        // });
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
    // Comments Methods

    // Upload Comment
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
        // console.log("UsersModel: ", UsersModel)
        // console.log("Model: ", models);

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
}