
module.exports = {
    async addUser(userObj) {
        let user = await this.create(userObj)
        return user;
    },
    checkUnique(email) {
        let user = this.findOne({
            where: {
                email: email
            }
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
    }
}