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

    getUserId(email) {
        let user = this.findOne({
            where: {
                email: email
            },
            attributes: ['id']
        })
        return user;
    },


    // Posts Methods
    async uploadPost(postObj) {
        console.log("POST DATA: ", postObj)
        let post = await this.create(postObj)
        return post;
    }
}